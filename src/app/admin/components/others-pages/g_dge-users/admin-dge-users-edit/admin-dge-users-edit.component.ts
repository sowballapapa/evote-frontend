import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {DgeUserService} from '../../../../services/dge-user.service';
import {CollectorService} from '../../../../../sponsorships/collector/services/collector.service';
import {ModalService} from '../../../../../core/services/modal.service';
import {RoleService} from '../../../../services/role.service';

@Component({
    selector: 'app-admin-dge-users-edit',
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    NgClass
  ],
    templateUrl: './admin-dge-users-edit.component.html',
    styleUrl: './admin-dge-users-edit.component.css'
})
export class AdminDgeUsersEditComponent {
  form = new FormGroup({
    registrationNumber: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern(/^\s*\w*\s*$/)]),
    role_id: new FormControl(null,[Validators.required]),
  })
  image!:any
  roles!:any
  errors!:any
  dgeUserDatas!:any
  id!:any

  constructor(private DgeUserservice: DgeUserService,
              private searchElectorService: CollectorService,
              private router:Router,
              private modalService: ModalService,
              private route:ActivatedRoute,
              private roleService: RoleService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.dgeUserDatas = null
    this.roleService.getAllRoles().subscribe((res:any)=>{
      if(res.status == 1){
        this.roles = res.data;
      }
    })

    this.DgeUserservice.getDgeUser(this.id).subscribe((res:any)=>{
      if(res.status == 1){
        this.dgeUserDatas = res.data;
        this.form.patchValue({
          registrationNumber: this.dgeUserDatas.registrationNumber,
          role_id: this.dgeUserDatas.role_id,
        })
      }
    })
  }

  onSubmit(): void {
    console.log(this.form.value)
    this.DgeUserservice.editDgeUser(this.id ,this.form.value).subscribe({
      next:(res:any)=>{
        this.modalService.show('success', 'Membre de la DGE modifié avec succès !')
        this.router.navigateByUrl('/admin/gestion-membres-dge/id/'+this.id);
      },
      error:(res:any)=>{
        this.modalService.show('danger', 'Une erreur est survenue!')
        console.log(res);
      }

    })
  }





}
