import { Component } from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {FilterLocationsService} from '../../../../services/filter-locations.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-admin-localites-base',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './admin-localites-base.component.html',
  styleUrl: './admin-localites-base.component.css'
})
export class AdminLocalitesBaseComponent {

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

  constructor(private locationService:FilterLocationsService) {}

  fetchAllLocations() {
    this.locationService.getLocations().pipe(
      takeUntil(this.destroy$),
    ).subscribe({
      next: (res: any) => {
        this.regions = res.data.regions;
        this.departments = res.data.departments;
        this.municipalities = res.data.municipalities;
        this.districts = res.data.districts;
        this.votingPlaces = res.data.votingPlaces;
        this.pollingStations = res.data.votingPlaces;
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
    this.fetchAllLocations()
  }

  ngAfterViewInit(){

  }





  ngOnDestroy(){
    this.destroy$.next(true)
  }
}
