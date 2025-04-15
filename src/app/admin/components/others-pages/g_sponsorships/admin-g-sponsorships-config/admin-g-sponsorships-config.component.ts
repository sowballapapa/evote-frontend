import { Component } from '@angular/core';
import {SponsorshipsService} from '../../../../services/sponsorships.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {ModalService} from '../../../../../core/services/modal.service';

@Component({
  selector: 'app-admin-g-sponsorships-config',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './admin-g-sponsorships-config.component.html',
  styleUrl: './admin-g-sponsorships-config.component.css'
})
export class AdminGSponsorshipsConfigComponent {
  sponsorshipsDetails!:any
  form = new FormGroup({
    max_electors_sign: new FormControl(null, [Validators.required]),
    district_min_electors_sign: new FormControl(null, [Validators.required]),
    min_electors_sign: new FormControl(null, [Validators.required]),
  })

  constructor(private sponsorshipsService: SponsorshipsService, private modalService:ModalService) {
  }

  ngOnInit() {
    this.sponsorshipsService.getSponsorshipsInfos().subscribe((res:any)=>{
      console.log(res)
      this.sponsorshipsDetails= res.data;
      this.form.patchValue({
        max_electors_sign: res.data.max_electors_sign,
        min_electors_sign: res.data.min_electors_sign,
        district_min_electors_sign: res.data.district_min_electors_sign,
      })
    })
  }

  startSponsor() {
    let formData = new FormData
    formData.append('_method', 'PUT')
    formData.append('started', JSON.stringify(!this.sponsorshipsDetails.started))
    this.sponsorshipsService.started(formData).subscribe({
      next:()=>{
        this.modalService.show("info", "Parrainages démarrés avec succès!")
        window.location.reload()
      },
      complete:()=>{},
      error:()=>{}
    })

  }

  stopSponsor() {
    let formData = new FormData
    formData.append('_method', 'PUT')
    formData.append('stoped', JSON.stringify(!this.sponsorshipsDetails.stoped))

    this.sponsorshipsService.stoped(formData).subscribe({
      next:()=>{
        this.modalService.show("info", "Parrainages arrêtés avec succès!")
        window.location.reload()
      },
      complete:()=>{},
      error:()=>{}
    })
  }

  onSubmit() {
    let formData = new FormData
    formData.append('_method', 'PUT')
    let formValue:any = this.form.value;
    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
      formData.append(key, value);
    }
    formData.append('title', this.sponsorshipsDetails.title)
    formData.append('description',  this.sponsorshipsDetails.description)
    formData.append('startingDate',  this.sponsorshipsDetails.startingDate)
    formData.append('endingDate',  this.sponsorshipsDetails.endingDate)
    this.sponsorshipsService.edit(formData).subscribe({
      next: (res:any)=>{
        this.modalService.show("info", "Les nombres de parrains requis modifiés avec succès!")
        window.location.reload()
      },
      error: (res:any)=>{}
    })
  }

  restartSponsor() {
    let formData = new FormData
    formData.append('_method', 'PUT')
    formData.append('started', JSON.stringify(!this.sponsorshipsDetails.started))
    formData.append('stoped', JSON.stringify(!this.sponsorshipsDetails.stoped))

    this.sponsorshipsService.restarted(formData).subscribe({
      next:()=>{
        this.modalService.show("info", "Parrainages redémarrés avec succès!")
        window.location.reload()
      },
      complete:()=>{},
      error:()=>{}
    })

  }
}
