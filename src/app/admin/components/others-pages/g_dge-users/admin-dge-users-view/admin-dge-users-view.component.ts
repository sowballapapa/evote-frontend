import { Component } from '@angular/core';
import {Field, ViewElementComponent} from '../../../reusable/view-element/view-element.component';
import {DgeUserService} from '../../../../services/dge-user.service';
import {ActivatedRoute} from '@angular/router';

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

  constructor(private route:ActivatedRoute,private adminService:DgeUserService) {}



ngOnInit(){
  let id = this.route.snapshot.params['id'];

  this.adminService.getDgeUser(id).subscribe((res:any)=>{
    // console.log(res);

    this.title = "Membre de la Dge avec l'id: "+ res.data.elector_id
    this.fields = [
      {title:'Id',value: res.data.elector_id},
      {title:'Matricule',value:res.data.registrationNumber},
      {title:'Nom',value:res.data.lastname},
      {title:'Prénom',value:res.data.firstname},
      {title:'Sexe',value:res.data.sex},
      {title:'Nom d\'utilisateur',value:res.data.username},
      {title:'Email',value:res.data.email},
      {title:'Téléphone',value:res.data.phone},
      {title:'Date de Naissance',value:res.data.birthDate},
      {title:'Lieu de Naissance',value:res.data.birthPlace},
      {title:'Adresse',value:res.data.address},
      {title:'Fonction',value:res.data.title},
    ]
  })
  }


}
