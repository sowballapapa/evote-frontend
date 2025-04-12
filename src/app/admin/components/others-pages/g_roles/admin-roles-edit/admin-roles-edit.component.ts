import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {RoleService} from '../../../../services/role.service';
import {NgClass, NgIf} from "@angular/common";
import {ModalService} from '../../../../../core/services/modal.service';

@Component({
  selector: 'app-admin-roles-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgIf,
    NgClass
  ],
  templateUrl: './admin-roles-edit.component.html',
  styleUrl: './admin-roles-edit.component.css'
})
export class AdminRolesEditComponent {
  id:number;
  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]),
    description: new FormControl(''),
  })
  constructor(private service:RoleService,
              private router:Router,
              private route:ActivatedRoute,
              private modalService:ModalService) {
    this.id = this.route.snapshot.params['id'];
  }



  ngOnInit() {
    this.service.getOne(this.id).subscribe((res:any)=>{
      this.form.patchValue({
        title: res.data.title,
        description: res.data.description,
      })
    })
  }
  onSubmit() {
    this.service.edit(this.id,this.form.value).subscribe({
      next: data => {
        this.modalService.show('success', 'Fonction modifiée avec succès')
        this.router.navigateByUrl('/admin/gestion-fonctions-dge/id/'+this.id);

      },
      error: err => {
        this.modalService.show('danger', 'Une erreur est survenue.', false);
      }
    })
  }
}
