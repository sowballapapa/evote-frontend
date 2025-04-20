import { Component } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalService} from '../../../../../../core/services/modal.service';
import {DgeUserService} from '../../../../../services/dge-user.service';
import {UserAdminService} from '../../../../../services/comptes/user-admin.service';
import {ElectorService} from '../../../../../services/elector.service';
import {environment} from '../../../../../../../environments/environment.development';
import {UserElectorService} from '../../../../../services/comptes/user-elector.service';

@Component({
  selector: 'app-admin-new-user-elector',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './admin-new-user-elector.component.html',
  styleUrl: './admin-new-user-elector.component.css'
})
export class AdminNewUserElectorComponent {
  elector!:any
  id!:any

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', ),
    username: new FormControl('', ),
    image: new FormControl('', ),
    elector_id: new FormControl(),
  })
  constructor(private router:Router, private modalService: ModalService, private route:ActivatedRoute, private electorService:ElectorService, private userElectorService:UserElectorService) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.form.patchValue({
      elector_id: this.id
    })
    this.electorService.getElector(this.id).subscribe((res:any)=>{
      this.elector = res.data.elector;
    })
  }

  onSumbit() {
    this.userElectorService.create(this.form.value).subscribe((res:any)=>{
      let idUser = res.data.id;
      this.modalService.show("success", "Compte Elector créé avec succés! Le mot de passe a été envoyé sur l'adresse mail.")
      this.router.navigate(['/admin/gestion-comptes/electeurs/id/'+idUser]);
    })
  }

  protected readonly environment = environment;
}
