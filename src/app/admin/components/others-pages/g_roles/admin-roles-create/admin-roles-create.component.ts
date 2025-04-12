import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RoleService} from '../../../../services/role.service';
import {NgClass, NgIf} from "@angular/common";
import {ModalService} from '../../../../../core/services/modal.service';

@Component({
  selector: 'app-admin-roles-create',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './admin-roles-create.component.html',
  styleUrl: './admin-roles-create.component.css'
})
export class AdminRolesCreateComponent {

  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]),
    description: new FormControl(''),
  })

  constructor(private service:RoleService, private router:Router, private modalService:ModalService) { }

  onSubmit() {
    console.log(this.form.value);
    this.service.create(this.form.value).subscribe({
      next: data => {
          if (data){
            this.modalService.show('success', 'Fonction sauvegardée avec succès !')
            this.router.navigateByUrl('/admin/gestion-fonctions-dge');
          }
        // alert("Fonction ajoutée à la base avec succès");

      },
      error: err => {
        this.modalService.show('danger', 'Une erreur est survenue.', false);
        // alert(err);
      }
    })
  }
}
