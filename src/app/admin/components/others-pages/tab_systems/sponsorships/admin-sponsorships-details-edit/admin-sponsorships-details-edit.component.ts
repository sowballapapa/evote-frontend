import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';
import {environment} from '../../../../../../../environments/environment.development';
import {SponsorshipsService} from '../../../../../services/sponsorships.service';
import {ModalService} from '../../../../../../core/services/modal.service';

@Component({
    selector: 'app-admin-sponsorships-details-edit',
  imports: [
    RouterLink,
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    NgClass
  ],
    templateUrl: './admin-sponsorships-details-edit.component.html',
    styleUrl: './admin-sponsorships-details-edit.component.css'
})
export class AdminSponsorshipsDetailsEditComponent {

  protected readonly environment = environment;
  old_banner!:any
  form = new FormGroup({
    title: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    alernativeText: new FormControl(""),
    startingDate: new FormControl("", [Validators.required]),
    endingDate: new FormControl("", [Validators.required]),
    banner_spons: new FormControl(""),
  })

  constructor(private sponsorshipsSys:SponsorshipsService,  private router:Router, private modalService:ModalService) {
  }

  onFileChange(event:any) {
    const file:any = event.target.files[0];
    if (file) {
      this.form.patchValue({
        banner_spons: file
      })
    }
  }

  ngOnInit() {
    this.sponsorshipsSys.getSponsorshipsInfos().subscribe((res:any)=>{
      this.old_banner= res.data.banner_spons;
      this.form.patchValue({
        title:res.data.title,
        description:res.data.description,
        alernativeText:res.data.alernativeText,
        startingDate:res.data.startingDate,
        endingDate:res.data.endingDate,

      });
    })
  }

  onSubmit() {
    console.log(this.form.value);
    let formData = new FormData()
    formData.append('_method', 'PUT')
    let formValue:any = this.form.value;
    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
      formData.append(key, value);
    }
    this.sponsorshipsSys.edit(formData).subscribe({
      next:(res:any)=>{
        this.modalService.show('success', 'Données des Parrainages modifiées avec succès')
        this.router.navigateByUrl('/admin/gestion-systemes/parrainages-infos');
      },
      error:(err:any)=>{
        // alert(err)
        this.modalService.show('danger', 'Une erreur est survenue.', false);
      }
    })


  }
}
