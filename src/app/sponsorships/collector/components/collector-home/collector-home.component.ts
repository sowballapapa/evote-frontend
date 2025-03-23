import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CollectorService} from '../../services/collector.service';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-collector-home',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './collector-home.component.html',
  styleUrl: './collector-home.component.css'
})
export class CollectorHomeComponent {
  searchElector!:any
  elector!:any
  cniNumber!: number
  showResult =false
  collect_form_file!: any;
  elector_id!:any
  errors!:any


  constructor(private service:CollectorService, private router:Router) {
  }

  onSearch() {
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
  get f(){
    return this.myForm.controls;
  }
  onCollectFormChange(event: any){
      this.collect_form_file = event.target.files[0]
  }

  onCollect() {
    const formData = new FormData();
    formData.append('collect_form', this.collect_form_file, this.collect_form_file.name);
    formData.append('elector_id', this.elector_id);
      this.service.sponsoring(formData).subscribe({
        next: (res: any) => {
          if (res.status == 1) {
            alert('Parrainage enregistré, attente de la validation!')
            window.location.reload();
          }
        },
        error: (error: any) => {
          console.log(error);
          alert('Erreur');
        }
      })

  }
}
