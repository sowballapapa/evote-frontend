import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ElectionsService} from '../../../../services/elections.service';
import {ModalService} from '../../../../../core/services/modal.service';

@Component({
  selector: 'app-admin-g-elections-config',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './admin-g-elections-config.component.html',
  styleUrl: './admin-g-elections-config.component.css'
})
export class AdminGElectionsConfigComponent {
  electionsDetails!:any
  form = new FormGroup({
    max_electors_sign: new FormControl(null, [Validators.required]),
    district_min_electors_sign: new FormControl(null, [Validators.required]),
    min_electors_sign: new FormControl(null, [Validators.required]),
  })

  constructor(private electionsService: ElectionsService, private modalService:ModalService) {
  }

  ngOnInit() {
    this.electionsService.getElectionsInfos().subscribe((res:any)=>{
      console.log(res)
      this.electionsDetails= res.data;
      this.form.patchValue({
        max_electors_sign: res.data.max_electors_sign,
        min_electors_sign: res.data.min_electors_sign,
        district_min_electors_sign: res.data.district_min_electors_sign,
      })
    })
  }

  startElections() {
    let formData = new FormData
    formData.append('_method', 'PUT')
    formData.append('started', JSON.stringify(!this.electionsDetails.started))
    this.electionsService.started(formData).subscribe({
      next:()=>{
        this.modalService.show("info", "Elections démarrées avec succès!")
        window.location.reload()
      },
      complete:()=>{},
      error:()=>{}
    })

  }

  stopElections() {
    let formData = new FormData
    formData.append('_method', 'PUT')
    formData.append('stoped', JSON.stringify(!this.electionsDetails.stoped))

    this.electionsService.stoped(formData).subscribe({
      next:()=>{
        this.modalService.show("info", "Elections arrêtées avec succès!")
        window.location.reload()
      },
      complete:()=>{},
      error:()=>{}
    })
  }

  restartElections() {
    let formData = new FormData
    formData.append('_method', 'PUT')
    formData.append('started', JSON.stringify(!this.electionsDetails.started))
    formData.append('stoped', JSON.stringify(!this.electionsDetails.stoped))

    this.electionsService.restarted(formData).subscribe({
      next:()=>{
        this.modalService.show("info", "Elections redémarrés avec succès!")
        window.location.reload()
      },
      complete:()=>{},
      error:()=>{}
    })

  }
}
