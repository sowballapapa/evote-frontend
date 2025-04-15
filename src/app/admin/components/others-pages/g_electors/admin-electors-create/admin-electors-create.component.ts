import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {FilterLocationsService} from '../../../../services/filter-locations.service';
import {Subject,  takeUntil} from 'rxjs';
import {ElectorService} from '../../../../services/elector.service';
import {ModalService} from '../../../../../core/services/modal.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-admin-electors-create',
  imports: [
    ReactiveFormsModule,
    NgForOf,
    FormsModule,
    NgClass,
    NgIf,
  ],
    templateUrl: './admin-electors-create.component.html',
    styleUrl: './admin-electors-create.component.css'
})
export class AdminElectorsCreateComponent {

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
  pollingStationId = 0

  height!:string

  form = new FormGroup({
    cniNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(13), Validators.maxLength(13)]),
    electorNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(9), Validators.maxLength(9)]),
    lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    firstname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    birthDate: new FormControl('', [Validators.required]),
    birthPlace: new FormControl('', [Validators.required, ]),
    sex: new FormControl('', [Validators.required]),
    height: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    delivranceDate: new FormControl('', [Validators.required]),
    expirationDate: new FormControl('', [Validators.required]),
    mumFirstname: new FormControl('', [Validators.required]),
    mumLastname: new FormControl('', [Validators.required]),
    dadFirstname: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    cniBack: new FormControl('', [Validators.required]),
    cniFront: new FormControl('', [Validators.required]),
    polling_station_id: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),

  })

  constructor(private locationService:FilterLocationsService, private electorService:ElectorService, private modalService:ModalService, private router:Router) {}

  imageChange(event:any ) {
    const image = event.target.files[0];
    if (image) {
      this.form.patchValue({
        image: image
      });
    }
  }

  cniFrontChange(event:any ) {
    const image = event.target.files[0];
    if (image) {
      this.form.patchValue({
        cniFront: image
      });
    }
  }
    cniBackChange(event:any ){
      const image = event.target.files[0];
      if (image) {
        this.form.patchValue({
          cniBack: image
        });
      }
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

  ngOnInit(){
  }

  ngAfterViewInit(){
    this.fetchAllLocations()

  }

  onSubmit() {
    let formData = new FormData
    let formValue:any = this.form.value;
    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
      formData.append(key, value);
    }
    this.electorService.createElector(formData).subscribe({
      next:(res:any)=>{
        this.modalService.show('success', 'Electeur sauvegardé avec succès !')
        this.router.navigateByUrl('/admin/gestion-electeurs');
      },
      error:(res:any)=>{
        console.log(res)
      }

    })

  }

  heightValue(event:any) {
    this.height=event.target.value;
    this.form.patchValue({
      height: this.height,
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

  getVPId(id:any){
    this.votingPlaceId = id
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
  }

  ngOnDestroy(){
    this.destroy$.next(true)
  }
}
