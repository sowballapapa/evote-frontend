import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RoleService} from '../../../../services/role.service';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {ModalService} from '../../../../../core/services/modal.service';
import {VotingPlaceService} from '../../../../services/voting-place.service';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {Subject, takeUntil} from 'rxjs';
import {FilterLocationsService} from '../../../../services/filter-locations.service';

@Component({
  selector: 'app-admin-voting-places-edit',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    NgClass,
    NgForOf
  ],
  templateUrl: './admin-voting-places-edit.component.html',
  styleUrl: './admin-voting-places-edit.component.css'
})
export class AdminVotingPlacesEditComponent {
  id:number;

  destroy$ = new Subject();
  regions!:any
  departments:any
  municipalities!:any
  districts!:any
  votingPlaces!:any
  pollingStations!:any

  regionId =0
  departmentId = 0
  districtId = 0
  municipalityId = 0
  votingPlaceId = 0

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]),
    district_id: new FormControl('', Validators.required),
  })
  constructor(private service:VotingPlaceService,
              private locationService:FilterLocationsService,
              private router:Router,
              private route:ActivatedRoute,
              private modalService:ModalService) {
    this.id = this.route.snapshot.params['id'];
  }
  fetchAllLocations() {
    this.locationService.getLocations().pipe(
      takeUntil(this.destroy$),
    ).subscribe({
      next: (res: any) => {
        this.regions = res.data.regions;

        if (this.regionId != 0) {
          this.regions = this.regions.filter((r: any) => r.id == this.regionId);
          this.departments = res.data.departments.filter((d: any) => d.region_id == this.regionId);
        }
        if (this.departmentId !== 0) {
          this.departments = this.departments.filter((d: any) => d.id == this.departmentId);
          this.municipalities = res.data.municipalities.filter((m: any) => m.department_id == this.departmentId);
        }
        if (this.municipalityId !== 0) {
          this.municipalities = this.municipalities.filter((m: any) => m.id == this.municipalityId);
          this.districts = res.data.districts.filter((d: any) => d.municipality_id == this.municipalityId);
        }
        if (this.districtId !== 0) {
          this.districts = this.districts.filter((d: any) => d.id == this.districtId);
          this.votingPlaces = res.data.votingPlaces.filter((v: any) => v.district_id == this.districtId);
        }
        if (this.votingPlaceId !== 0) {
          this.votingPlaces = this.votingPlaces.filter((v: any) => v.id == this.votingPlaceId);
          this.pollingStations = res.data.pollingStations.filter((p: any) => p.voting_place_id == this.votingPlaceId);
        }
      },
      /* complete: () => {
         this.regionId = 0
         this.municipalities = 0
         this.districts = 0
         this.votingPlaces = 0
         this.pollingStations = 0
         this.departmentId = 0
       }*/
    })
  }



  ngOnInit() {
    this.service.getOne(this.id).subscribe((res:any)=>{
      this.form.patchValue({
        name: res.data.name,
        district_id: res.data.district_id,
      })
      this.districtId = res.data.district_id;
      this.locationService.getLocations().pipe(
        takeUntil(this.destroy$),
      ).subscribe((res:any)=>{
        console.log(res);
        this.districts = res.data.districts.filter((d: any) => d.id == this.districtId);
      })
    })
  }


  ngAfterViewInit(){
    this.fetchAllLocations()

  }


  onSubmit() {
    this.service.edit(this.id,this.form.value).subscribe({
      next: data => {
        this.modalService.show('success', 'Lieu de Vote modifié avec succès')
        this.router.navigateByUrl('/admin/gestion-lieux-de-votes/id/'+this.id);

      },
      error: err => {
        this.modalService.show('danger', 'Une erreur est survenue.', false);
      }
    })
  }

  getRegionId(id:any){
    this.regionId = id;
    this.fetchAllLocations()
  }

  getDepartmentId(id:any){
    this.departmentId = id
    this.fetchAllLocations()
  }


  getMunicipalityId(id:any){
    this.municipalityId = id
    this.fetchAllLocations()
  }

  getDistrictId(id:any){
    this.districtId = id
    this.fetchAllLocations()
  }

  resetFilteredlocation(){
    this.regionId = 0
    this.departmentId = 0
    this.municipalityId = 0
    this.districtId = 0
    this.votingPlaceId = 0
    this.departments = []
    this.pollingStations = []
    this.municipalities = []
    this.districts = []
    this.votingPlaces = []
    this.pollingStations = []
    this.fetchAllLocations()
    this.form.patchValue({
      district_id: ''
    })
  }

  ngOnDestroy(){
    this.destroy$.next(true)
  }
}
