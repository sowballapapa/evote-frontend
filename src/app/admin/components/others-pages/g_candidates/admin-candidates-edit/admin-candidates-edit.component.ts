import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {CandidateService} from '../../../../services/candidate.service';
import {CollectorService} from '../../../../../sponsorships/collector/services/collector.service';
import {PartyService} from '../../../../services/party.service';
import {ElectorService} from '../../../../services/elector.service';
import {environment} from '../../../../../../environments/environment.development';
import {ModalService} from '../../../../../core/services/modal.service';

@Component({
    selector: 'app-admin-candidates-edit',
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    NgClass
  ],
    templateUrl: './admin-candidates-edit.component.html',
    styleUrl: './admin-candidates-edit.component.css'
})
export class AdminCandidatesEditComponent {

  id!:any
  storageUrl = environment.storageUrl;

  form = new FormGroup({
    party_or_coalition_id: new FormControl(null, [Validators.required]),
    image: new FormControl(),
    biography: new FormControl('', Validators.required),
    campaignWord: new FormControl('', Validators.required),
  })
  old_img!:any
  image!:any
  parties!:any
  errors: any;
  candidateData!:any
  constructor(private service:CandidateService,
              private partyServ:PartyService,
              private router:Router,
              private route: ActivatedRoute,
              private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.partyServ.getAll().subscribe((response:any) => {
      this.parties = response.data;
    })
    this.service.getCandidate(this.id).subscribe((res:any) => {
      console.log(res);
      this.candidateData = res.data.elector;
      this.old_img = res.data.candidate.image;
      this.form.patchValue({
        party_or_coalition_id: res.data.candidate.party_or_coalition_id,
        // image: res.data.candidate.image,
        biography: res.data.candidate.biography,
        campaignWord: res.data.candidate.campaignWord,
      })

    })
  }

  onSubmit() {
    console.log(this.form.value);
    let formData = new FormData
    formData.append('_method', 'PUT')
    let formValue:any = this.form.value;
    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
      formData.append(key, value);
    }
    this.service.editCandidate(this.id,formData).subscribe({
      next: data => {
        this.modalService.show("success","Candidat Modifié avec succès");
        this.router.navigateByUrl('/admin/gestion-candidats/id/'+this.id);

      },
      error: (err:any) => {
        console.log(err);
        this.modalService.show("danger", "Une erreur est survenue!", false);
      }
    })
  }

  imageChange(event:any ) {
    const image = event.target.files[0];
    if (image) {
      this.image = event.target.files[0];
      this.form.patchValue({
        image: image
      });
    }

  }

}
