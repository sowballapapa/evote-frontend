import { Component } from '@angular/core';
import {Field, ViewElementComponent} from '../../../reusable/view-element/view-element.component';
import {DgeUserService} from '../../../../services/dge-user.service';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../../../../environments/environment.development';

@Component({
    selector: 'app-admin-dge-users-view',
  imports: [
    ViewElementComponent
  ],
    templateUrl: './admin-dge-users-view.component.html',
    styleUrl: './admin-dge-users-view.component.css'
})
export class AdminDgeUsersViewComponent {
  fields?: Field[];
  title?: string;
  dgeUser?:any

  constructor(private route:ActivatedRoute,private adminService:DgeUserService) {}



ngOnInit(){
  let id = this.route.snapshot.params['id'];

  this.adminService.getDgeUser(id).subscribe({
    next:(res:any)=>{
      this.dgeUser = res.data;

      if(this.dgeUser.sex ==0){
        this.dgeUser.sex = "Féminin"
      }else{
        this.dgeUser.sex = "Masculin"
      }


      this.title = "Membre de la Dge avec l'id: "+ this.dgeUser.elector_id
      this.fields = [
        {title:'Id',value: this.dgeUser.elector_id},
        {title:'Matricule',value:this.dgeUser.registrationNumber},
        {title:'Nom',value:this.dgeUser.lastname},
        {title:'Prénom',value:this.dgeUser.firstname},
        {title:'Sexe',value:this.dgeUser.sex},
        // {title:'Nom d\'utilisateur',value:this.dgeUser.username},
        // {title:'Email',value:this.dgeUser.email},
        // {title:'Téléphone',value:this.dgeUser.phone},
        {title:'Date de Naissance',value:this.dgeUser.birthDate},
        {title:'Lieu de Naissance',value:this.dgeUser.birthPlace},
        {title:'Adresse',value:this.dgeUser.address},
        {title:'Fonction',value:this.dgeUser.title},
      ]
      },
    error:(res:any)=>{
      console.log(res);
    }
  })
  }


  protected readonly environment = environment;
}
