import { Component } from '@angular/core';
import {AccViewElementComponent} from '../../../../reusable/acc-view-element/acc-view-element.component';
import {Field} from '../../../../reusable/view-element/view-element.component';
import {ActivatedRoute} from '@angular/router';
import {UserAdminService} from '../../../../../services/comptes/user-admin.service';
import {UserPollingService} from '../../../../../services/comptes/user-polling.service';
import { environment } from '../../../../../../../environments/environment.development';

@Component({
  selector: 'app-admin-acc-pollings-view',
  standalone: true,
  imports: [
    AccViewElementComponent
  ],
  templateUrl: './admin-acc-pollings-view.component.html',
  styleUrl: './admin-acc-pollings-view.component.css'
})
export class AdminAccPollingsViewComponent {

  fields?: Field[];
  title?: string;
  poll?:any

  constructor(private route:ActivatedRoute,private pollingService:UserPollingService) {}


  ngOnInit(){
    let id = this.route.snapshot.params['id'];

    this.pollingService.getOne(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.poll = res.data;

        this.title = "Bureau de vote avec l'id: "+ this.poll.userId
        this.fields = [
          {title:'Id',value: this.poll.userId},
          {title:'Image',value: this.poll.image},
          {title:'N° de Bureau',value:this.poll.stationNumber},
          {title:'Commune',value:this.poll.district_name},
          {title:'Lieu de Vote',value:this.poll.voting_place_name},
          {title:'Nom d\'utilisateur',value:this.poll.username},
          {title:'Email',value:this.poll.email},
          {title:'Téléphone',value:this.poll.phone},
        ]
      },
      error:(res:any)=>{
        console.log(res);
      }
    })
  }


  protected readonly environment = environment;
}
