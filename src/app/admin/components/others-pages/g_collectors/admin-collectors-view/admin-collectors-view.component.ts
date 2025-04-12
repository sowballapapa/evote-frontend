import { Component } from '@angular/core';
import {Field, ViewElementComponent} from "../../../reusable/view-element/view-element.component";
import {ActivatedRoute} from '@angular/router';
import {RoleService} from '../../../../services/role.service';
import {CollectorService} from '../../../../services/collector.service';
import { environment } from '../../../../../../environments/environment.development';

@Component({
  selector: 'app-admin-collectors-view',
  standalone: true,
    imports: [
        ViewElementComponent
    ],
  templateUrl: './admin-collectors-view.component.html',
  styleUrl: './admin-collectors-view.component.css'
})
export class AdminCollectorsViewComponent {

  fields?: Field[];
  title?: string;

  constructor(private route:ActivatedRoute,private collectorService:CollectorService) {}



  ngOnInit(){
    let id = this.route.snapshot.params['id'];

    this.collectorService.getOne(id).subscribe((res:any)=>{

      this.title = "Collecteur avec l'id: "+ res.data.id
      this.fields = [
        {title:'Id',value: res.data.id},
        {title:'Prénom(s)',value:res.data.firstname},
        {title:'Nom',value:res.data.lastname},
        // {title:'Sexe',value:res.data.sex},
        {title:'Date de Naissance',value:res.data.birthDate},
        {title:'Lieu de naissance',value:res.data.birthPlace},
        {title:'Adresse',value:res.data.address},
        {title:'N° CNI',value:res.data.cniNumber},
        {title:'N° Electeur',value:res.data.electorNumber},
        {title:'A propos',value:res.data.collector_about},
        {title:'Parti ou Coalition',value:res.data.name},
        {title:'Commune',value:res.data.district_name},
        {title:'Date de la Création',value:res.data.created_at},
        {title:'Date de la dernière modification',value:res.data.updated_at}
      ]
    })
  }


  protected readonly environment = environment;
}
