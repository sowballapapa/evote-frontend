import { Component } from '@angular/core';
import { environment } from '../../../../../../../environments/environment.development';
import {ActivatedRoute} from '@angular/router';
import {UserAdminService} from '../../../../../services/comptes/user-admin.service';
import {AccViewElementComponent} from '../../../../reusable/acc-view-element/acc-view-element.component';
import {Field} from '../../../../reusable/view-element/view-element.component';
import {AccPaginateTableComponent} from '../../../../reusable/acc-paginate-table/acc-paginate-table.component';

@Component({
  selector: 'app-admin-admin-view',
  standalone: true,
  imports: [
    AccViewElementComponent,
  ],
  templateUrl: './admin-admin-view.component.html',
  styleUrl: './admin-admin-view.component.css'
})
export class AdminAdminViewComponent {


  fields?: Field[];
  title?: string;
  dgeUser?:any

  constructor(private route:ActivatedRoute,private adminService:UserAdminService) {}


  ngOnInit(){
    let id = this.route.snapshot.params['id'];

    this.adminService.getOne(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.dgeUser = res.data;

        this.title = "Membre de la Dge avec l'id: "+ this.dgeUser.userId
        this.fields = [
          {title:'Id',value: this.dgeUser.userId},
          {title:'Image',value: this.dgeUser.image},
          {title:'Matricule',value:this.dgeUser.registrationNumber},
          {title:'Nom',value:this.dgeUser.lastname},
          {title:'Prénom',value:this.dgeUser.firstname},
          {title:'Nom d\'utilisateur',value:this.dgeUser.username},
          {title:'Email',value:this.dgeUser.email},
          {title:'Téléphone',value:this.dgeUser.phone},
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
