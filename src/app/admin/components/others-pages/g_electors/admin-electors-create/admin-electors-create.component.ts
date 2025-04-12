import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { NgForOf} from '@angular/common';
import {FilterLocationsService} from '../../../../services/filter-locations.service';
import {Subject, switchMap, takeUntil} from 'rxjs';

@Component({
    selector: 'app-admin-electors-create',
  imports: [
    ReactiveFormsModule,
    NgForOf,
    FormsModule,
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

  height!:number

  form = new FormGroup({
    cniNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    electorNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    lastname: new FormControl('', [Validators.required, Validators.pattern('[a-z]*')]),
    firstname: new FormControl('', [Validators.required, Validators.pattern('[a-z]*')]),
    birthDate: new FormControl('', [Validators.required]),
    birthPlace: new FormControl('', [Validators.required, Validators.pattern('[a-z]*')]),
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

  constructor(private locationService:FilterLocationsService) {}

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

  }

  heightValue(event:any) {
      this.height = event.target.value
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
