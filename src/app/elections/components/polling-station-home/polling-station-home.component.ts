import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf, PercentPipe} from '@angular/common';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment.development';
import {PollingStationService} from '../../services/polling-station.service';
import {ModalService} from '../../../core/services/modal.service';

@Component({
    selector: 'app-polling-station-home',
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    PercentPipe
  ],
    templateUrl: './polling-station-home.component.html',
    styleUrl: './polling-station-home.component.css'
})
export class PollingStationHomeComponent {
  searchElector!:any
  elector!:any
  cniNumber!: number
  showResult =false
  collect_form_file!: any;
  elector_id!:any
  errors!:any
  stats!:any


  constructor(private service:PollingStationService, private router:Router, private modalService:ModalService) {
  }

  ngOnInit() {

    this.service.getStats().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.stats = res.data;
      }
    })
  }

  onSearch() {
    this.errors = null
    this.searchElector = {
      cniNumber : this.cniNumber
    }
    this.service.searchElector(this.searchElector).subscribe({
      next:(res:any)=>{
        if (res.status == 1) {
          this.showResult=true;
          this.errors = null
          this.elector = res.data;
          this.elector_id = this.elector.id;
          console.log(this.elector);
        }
        if (res.status == 0) {
          this.errors = "L'électeur a déjà voté"
        }
        if (res.status == 2) {
          this.errors = "L'électeur n'appartient pas à votre bureau de vote"
        }
      },
      error:(error:any)=>{
        this.errors = "Electeur non existant dans la base!"
        this.showResult=false;
        if (!this.searchElector.cniNumber) {
          this.showResult=false;
          this.errors = "Veuillez renseigner un Numéro de Carte nationale d'identité!"
        }
      }
    })
  }


  myForm = new FormGroup({
    elector_id: new FormControl(this.elector_id, [Validators.required]),
    collect_form: new FormControl( '', [Validators.required]),
  })
  storageurl= environment.storageUrl;

  authorizeVote(data:any) {
    this.service.authorizeVote(data).subscribe({
      next:(res:any)=>{
        if (res.status == 1) {
          this.modalService.show("success", "Autoriser à voté! L'électeur peut maintent aller dans l'urne", true,10000 )
          const urne_url = this.router.serializeUrl(
            this.router.createUrlTree(['elections-interface/urne/'+data])
          );
          window.open(urne_url, '_blank');
        }
      }
    })
  }
}
