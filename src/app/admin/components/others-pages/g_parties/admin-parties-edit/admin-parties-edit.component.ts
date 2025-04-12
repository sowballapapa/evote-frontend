import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {PartyService} from '../../../../services/party.service';
import {ModalService} from '../../../../../core/services/modal.service';
import {environment} from '../../../../../../environments/environment.development';
import {NgClass, NgIf} from '@angular/common';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-admin-parties-edit',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgIf,
    NgClass
  ],
    templateUrl: './admin-parties-edit.component.html',
    styleUrl: './admin-parties-edit.component.css'
})
export class AdminPartiesEditComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    slogan: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    logo: new FormControl('', ),
    ballot: new FormControl('', ),
    campaignProgram: new FormControl( '', ),
    party_or_coalition_id: new FormControl( null),
  })

  id!:any
  logoFile: File | null = null;
  ballotFile: File | null = null;
  campaignProgramFile: File | null = null;
  old_logo: any
  old_ballot: any
  old_campaignP: any
  storageUrl = environment.storageUrl;
  coalitions!:any

  onLogoChange(event:any){
    const logo = event.target.files[0];
    if(logo){
      this.logoFile = logo;
      this.form.patchValue({
        logo: logo,
      })
    }
  }

  onBallotChange(event:any){
    const ballot = event.target.files[0];
    if(ballot){
      this.ballotFile = ballot;
      this.form.patchValue({
        ballot: ballot,
      })
    }
  }

  onCampaignProgramChange(event:any){
    const campaignProgram = event.target.files[0];
    if(campaignProgram){
      this.campaignProgramFile = campaignProgram
      this.form.patchValue({
        campaignProgram: campaignProgram,
      })
    }
  }

  constructor(private partyService:PartyService,
              private router:Router,
              private modalService:ModalService,
              private route:ActivatedRoute,
              private domSanitizer:DomSanitizer) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.partyService.getAll().subscribe((response:any)=>{
      this.coalitions = response.data.filter((d:any) => d.party_or_coalition_id !== null);
    })
    this.partyService.getParty(this.id).subscribe((response:any)=>{
      this.form.patchValue({
        party_or_coalition_id: response.data.party_or_coalition_id,
        name: response.data.name,
        slogan: response.data.slogan,
        description: response.data.description,

      })
      this.old_logo = response.data.logo;
      this.old_ballot = response.data.ballot;
      this.old_campaignP = this.domSanitizer.bypassSecurityTrustResourceUrl(this.storageUrl+response.data.campaignProgram);
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
    this.partyService.edit(this.id,formData).subscribe({
      next: (res:any) => {
        this.modalService.show("success", "Parti Modifié avec succés!")
        this.router.navigateByUrl("/admin/gestion-partis-coalitions")
      },
      error: (err:any) => {
        this.modalService.show("danger", "Une erreur est survenue!")
      }
    })

  }
}
