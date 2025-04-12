import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";
import {environment} from "../../../../../../../environments/environment.development";
import {ElectionsService} from '../../../../../services/elections.service';
import {ModalService} from '../../../../../../core/services/modal.service';

@Component({
    selector: 'app-admin-elections-details-edit',
  imports: [
    RouterLink,
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    NgClass
  ],
    templateUrl: './admin-elections-details-edit.component.html',
    styleUrl: './admin-elections-details-edit.component.css'
})
export class AdminElectionsDetailsEditComponent {

    protected readonly environment = environment;
    old_banner!:any
    form = new FormGroup({
      title: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      alernativeText: new FormControl(""),
      startingDate: new FormControl("", [Validators.required]),
      endingDate: new FormControl("", [Validators.required]),
      banner_elect: new FormControl(""),
    })

  constructor(private electionsSys:ElectionsService,  private router:Router, private modalService:ModalService) {
  }

  onFileChange(event:any) {
      const file:any = event.target.files[0];
      if (file) {
        this.form.patchValue({
          banner_elect: file
        })
      }
  }

  ngOnInit() {
  this.electionsSys.getElectionsInfos().subscribe((res:any)=>{
    this.old_banner= res.data.banner_elect;
    this.form.patchValue({
      title:res.data.title,
      description:res.data.description,
      alernativeText:res.data.alternativeText,
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
    this.electionsSys.edit(formData).subscribe({
      next:(res:any)=>{
        this.modalService.show('success', 'Données des Elections modifiées avec succès')
        this.router.navigateByUrl('/admin/gestion-systemes/elections-infos');
      },
      error:(err:any)=>{
        // alert(err)
        this.modalService.show('danger', 'Une erreur est survenue.', false);
      }
    })


  }
}
