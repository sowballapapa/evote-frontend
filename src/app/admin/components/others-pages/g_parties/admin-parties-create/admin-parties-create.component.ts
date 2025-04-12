import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {PartyService} from '../../../../services/party.service';
import {ModalService} from '../../../../../core/services/modal.service';
import {NgClass, NgIf} from '@angular/common';

@Component({
    selector: 'app-admin-parties-create',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgIf,
    NgClass
  ],
    templateUrl: './admin-parties-create.component.html',
    styleUrl: './admin-parties-create.component.css'
})
export class AdminPartiesCreateComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    slogan: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    logo: new FormControl('', Validators.required),
    ballot: new FormControl('', Validators.required),
    campaignProgram: new FormControl( '', Validators.required),
    party_or_coalition_id: new FormControl( null),
  })

  logoFile: File | null = null;
  ballotFile: File | null = null;
  campaignProgramFile: File | null = null;

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

  constructor(private partyService:PartyService, private router:Router, private modalService:ModalService) {}

  ngOnInit() {
    this.partyService.getAll().subscribe((response:any)=>{
      this.coalitions = response.data.filter((d:any) => d.party_or_coalition_id !== null);
    })
    this.form.patchValue({
      party_or_coalition_id: null,
    })
  }

  onSubmit() {
    let formData = new FormData
    let formValue:any = this.form.value;
    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
      formData.append(key, value);
    }
    this.partyService.create(formData).subscribe({
      next: (res:any) => {
        this.modalService.show("success", "Parti créé avec succés!")
        this.router.navigateByUrl("/admin/gestion-partis-coalitions")
      },
      error: (err:any) => {
        this.modalService.show("danger", "Une erreur est survenue!")
      }
    })

  }
}
