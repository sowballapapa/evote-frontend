import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {DgeUserService} from '../../../../services/dge-user.service';
import {CollectorService} from '../../../../../sponsorships/collector/services/collector.service';
import {RoleService} from '../../../../services/role.service';
import {Router, RouterLink} from '@angular/router';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {ModalService} from '../../../../../core/services/modal.service';

@Component({
    selector: 'app-admin-dge-users-create',
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    NgClass
  ],
    templateUrl: './admin-dge-users-create.component.html',
    styleUrl: './admin-dge-users-create.component.css'
})
export class AdminDgeUsersCreateComponent {
form = new FormGroup({
  electorId: new FormControl(null,),
  registrationNumber: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern(/^\s*\w*\s*$/)]),
  role_id: new FormControl(null,[Validators.required]),
})
  image!:any
  roles!:any
  errors!:any
  dgeUserDatas!:any

  constructor(private DgeUserservice: DgeUserService,
              private searchElectorService: CollectorService,
              private router:Router,
              private modalService: ModalService,
              private roleService: RoleService) { }

  ngOnInit(): void {
  this.dgeUserDatas = null
    this.roleService.getAllRoles().subscribe((res:any)=>{
      if(res.status == 1){
        this.roles = res.data;
      }
    })
  }

  onSubmit(): void {
    let formData = new FormData
    let formValue:any = this.form.value;
    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
      formData.append(key, value);
    }
    this.DgeUserservice.createDgeUser(formData).subscribe({
      next:(res:any)=>{
        this.modalService.show('success', 'Membre de la DGE sauvegardé avec succès !')
        this.router.navigateByUrl('/admin/gestion-membres-dge');
      },
      error:(res:any)=>{
        console.log(res)
      }

    })
  }


  searchForm = new FormGroup({
    cniNumber: new FormControl(null, [Validators.required])
  })

  searchElector() {
  this.errors = ''
    this.searchElectorService.searchElector(this.searchForm.value).subscribe({
      next: (res:any) => {
        this.dgeUserDatas = res.data;
        this.form.patchValue({
          electorId: this.dgeUserDatas.id,
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
