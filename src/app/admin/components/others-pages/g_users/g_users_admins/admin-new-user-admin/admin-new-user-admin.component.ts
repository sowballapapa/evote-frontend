import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {DgeUserService} from '../../../../../services/dge-user.service';
import {UserAdminService} from '../../../../../services/comptes/user-admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ModalService} from '../../../../../../core/services/modal.service';

@Component({
  selector: 'app-admin-new-user-admin',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './admin-new-user-admin.component.html',
  styleUrl: './admin-new-user-admin.component.css'
})
export class AdminNewUserAdminComponent {
  dgeUser!:any
  id!:any

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', ),
    username: new FormControl('', ),
    image: new FormControl('', ),
    dge_user_id: new FormControl(),
  })
  constructor(private router:Router, private modalService: ModalService, private route:ActivatedRoute, private dgeUserService:DgeUserService, private adminService:UserAdminService) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.form.patchValue({
      dge_user_id: this.id
    })
    this.dgeUserService.getDgeUser(this.id).subscribe((res:any)=>{
      this.dgeUser = res.data;
    })
  }

  onSumbit() {
    this.adminService.create(this.form.value).subscribe((res:any)=>{
      let idUser = res.data.id;
      this.modalService.show("success", "Compte Admin créé avec succés! Le mot de passe a été envoyé sur l'adresse mail et n'oublié pas de lui accordé les privilèges.")
      this.router.navigate(['/admin/gestion-comptes/admins/id/'+idUser]);
    })
  }
}
