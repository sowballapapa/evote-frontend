import { Component } from '@angular/core';
import {Field, ViewElementComponent} from '../../../reusable/view-element/view-element.component';
import {ActivatedRoute} from '@angular/router';
import {DgeUserService} from '../../../../services/dge-user.service';
import {RoleService} from '../../../../services/role.service';
import {environment} from '../../../../../../environments/environment.development';

@Component({
  selector: 'app-admin-roles-view',
  standalone: true,
  imports: [
    ViewElementComponent
  ],
  templateUrl: './admin-roles-view.component.html',
  styleUrl: './admin-roles-view.component.css'
})
export class AdminRolesViewComponent {
  fields?: Field[];
  title?: string;

  constructor(private route:ActivatedRoute,private roleService:RoleService) {}



  ngOnInit(){
    let id = this.route.snapshot.params['id'];

    this.roleService.getOne(id).subscribe((res:any)=>{

      this.title = "Fonction des membres de la Dge avec l'id: "+ res.data.id
      this.fields = [
        {title:'Id',value: res.data.id},
        {title:'Titre',value:res.data.title},
        {title:'Description',value:res.data.description},
        {title:'Date de la Création',value:res.data.created_at},
        {title:'Date de la dernière modification',value:res.data.updated_at}
      ]
    })
  }


  protected readonly environment = environment;
}
