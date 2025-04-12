import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {DgeInfosService} from '../../../../../services/dge-infos.service';
import {environment} from '../../../../../../../environments/environment.development';
import {NgClass, NgIf} from '@angular/common';
import {ModalService} from '../../../../../../core/services/modal.service';

@Component({
    selector: 'app-admin-dge-details-edit',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgIf,
    NgClass
  ],
    templateUrl: './admin-dge-details-edit.component.html',
    styleUrl: './admin-dge-details-edit.component.css'
})
export class AdminDgeDetailsEditComponent {
  new_logo!:any
  old_logo!:any
  form = new FormGroup({
    electorCountryCode: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
    name: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(255)]),
    acronym: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    about: new FormControl('', [Validators.required]),
    logo: new FormControl(''),
    phone1: new FormControl('', [Validators.required]),
    phone2: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    Text1: new FormControl(''),
    Text2: new FormControl(''),
  });

  constructor(private service:DgeInfosService, private router:Router, private modalService:ModalService) { }

  ngOnInit() {
    this.service.view().subscribe((res:any)=>{
      this.form.patchValue({
        electorCountryCode:res.data.electorCountryCode,
        name:res.data.name,
        acronym:res.data.acronym,
        about:res.data.about,
        phone1:res.data.phone1,
        phone2:res.data.phone2,
        email:res.data.email,
        address:res.data.address,
        Text1:res.data.Text1,
        Text2:res.data.Text2,
        // logo:res.data.logo,
      })
      this.old_logo = res.data.logo;
    })
  }

  protected readonly environment = environment;

  onFileChange(event: any){
    if (event.target.files[0]) {
      this.new_logo = event.target.files[0]
      this.form.patchValue({
        logo:this.new_logo
      })
    }

  }
  onSumbmit() {
    console.log(this.form.value);
    let formData = new FormData()
    formData.append('_method', 'PUT');
    let formValue:any = this.form.value;
    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
        formData.append(key, value);
    }
    this.service.edit(1, formData).subscribe({
      next:(res:any)=>{

        this.modalService.show('success', 'Données DGE modifiées avec succès')
        this.router.navigateByUrl('/admin/gestion-systemes/dge-infos');
      },
      error:(err:any)=>{
        // alert(err)
        this.modalService.show('danger', 'Une erreur est survenue.', false);
      }
    })

  }
}
