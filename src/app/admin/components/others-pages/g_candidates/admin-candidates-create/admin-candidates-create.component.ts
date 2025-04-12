import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {CandidateService} from '../../../../services/candidate.service';
import {PartyService} from '../../../../services/party.service';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {CollectorService} from '../../../../../sponsorships/collector/services/collector.service';
import {ModalService} from '../../../../../core/services/modal.service';

@Component({
    selector: 'app-admin-candidates-create',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgForOf,
    NgIf,
    NgClass
  ],
    templateUrl: './admin-candidates-create.component.html',
    styleUrl: './admin-candidates-create.component.css'
})
export class AdminCandidatesCreateComponent {
  form = new FormGroup({
    electorId: new FormControl(null,),
    party_or_coalition_id: new FormControl(null, [Validators.required]),
    image: new FormControl('', Validators.required),
    biography: new FormControl('', Validators.required),
    campaignWord: new FormControl('', Validators.required),
  })

  searchForm = new FormGroup({
    cniNumber: new FormControl(null, [Validators.required])
  })
  image!:any
  parties!:any
  errors: any;
  candidateData!:any
  constructor(private service:CandidateService,
              private searchElectorservice: CollectorService,
              private partyServ:PartyService,
              private modalService:ModalService,
              private router:Router) { }

  ngOnInit(): void {
    this.candidateData = null
    this.partyServ.getAll().subscribe((response:any) => {
      this.parties = response.data;
    })
  }

  onSubmit() {
    console.log(this.form.value);
    let formData = new FormData
    let formValue:any = this.form.value;
    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
      formData.append(key, value);
    }
    this.service.createCandidate(formData).subscribe({
      next: data => {
        this.modalService.show('success', 'Candidat ajoutée à la base avec succès!')
        this.router.navigateByUrl('/admin/gestion-candidats');

      },
      error: err => {
        console.log(err);
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

  searchElector() {
    this.searchElectorservice.searchElector(this.searchForm.value).subscribe({
      next: (res:any) => {
        this.candidateData = res.data;
        this.form.patchValue({
          electorId: this.candidateData.id,
        })
      },
      error: err => {
        if (err.error.errors.cniNumber){
          this.errors = "Aucun réultat pour ce numéro."
        }
      }
    })
  }

}
