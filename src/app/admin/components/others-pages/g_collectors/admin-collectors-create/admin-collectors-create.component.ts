import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {CandidateService} from '../../../../services/candidate.service';
import {ModalService} from '../../../../../core/services/modal.service';
import {DistrictService} from '../../../../services/district.service';
import {CollectorService} from '../../../../services/collector.service';

@Component({
  selector: 'app-admin-collectors-create',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    NgClass
  ],
  templateUrl: './admin-collectors-create.component.html',
  styleUrl: './admin-collectors-create.component.css'
})
export class AdminCollectorsCreateComponent {

  form = new FormGroup({
    electorId: new FormControl(null,),
    candidate_id: new FormControl(null, [Validators.required]),
    district_id: new FormControl('', Validators.required),
    collector_about: new FormControl(''),
  })

  searchForm = new FormGroup({
    cniNumber: new FormControl(null, [Validators.required])
  })
  candidates!:any
  districts!:any
  errors: any;
  collectorData!:any
  constructor(private candidateService:CandidateService,
              private collectorService: CollectorService,
              private districtService:DistrictService,
              private modalService:ModalService,
              private router:Router) { }

  ngOnInit(): void {
    this.collectorData = null
    this.candidateService.getAll().subscribe((response:any) => {
      console.log(response)
      this.candidates = response.data;
    })
    this.districtService.getAll().subscribe((response:any) => {
      this.districts = response.data;
    })
  }

  onSubmit() {
    this.collectorService.create(this.form.value).subscribe({
      next: data => {
        this.modalService.show('success', 'Collecteur ajoutée à la base avec succès!')
        this.router.navigateByUrl('/admin/gestion-collecteurs');

      },
      error: (err:any) => {
        console.log(err);
      }
    })
  }


  searchElector() {
    this.collectorService.searchElector(this.searchForm.value).subscribe({
      next: (res:any) => {
        this.collectorData = res.data;
        this.form.patchValue({
          electorId: this.collectorData.id,
        })
      },
      error: (err:any) => {
        if (err.error.errors.cniNumber){
          this.errors = "Aucun réultat pour ce numéro."
        }
      }
    })
  }

}
