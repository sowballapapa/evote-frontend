import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Subject, takeUntil} from 'rxjs';
import {VotingPlaceService} from '../../../../services/voting-place.service';
import {FilterLocationsService} from '../../../../services/filter-locations.service';
import {ModalService} from '../../../../../core/services/modal.service';

@Component({
  selector: 'app-admin-voting-places-create',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    NgClass
  ],
  templateUrl: './admin-voting-places-create.component.html',
  styleUrl: './admin-voting-places-create.component.css'
})
export class AdminVotingPlacesCreateComponent {

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

  }


  ngAfterViewInit(){
    this.fetchAllLocations()

  }


  onSubmit() {
    this.service.create(this.form.value).subscribe({
      next: data => {
        this.modalService.show('success', 'Lieu de Vote créé avec succès')
        this.router.navigateByUrl('/admin/gestion-lieux-de-votes')

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
