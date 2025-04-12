import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {CandidateService} from '../../../../services/candidate.service';
import {CollectorService} from '../../../../services/collector.service';
import {DistrictService} from '../../../../services/district.service';
import {ModalService} from '../../../../../core/services/modal.service';

@Component({
  selector: 'app-admin-collectors-edit',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    NgClass
  ],
  templateUrl: './admin-collectors-edit.component.html',
  styleUrl: './admin-collectors-edit.component.css'
})
export class AdminCollectorsEditComponent {


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
  id!:any
  constructor(private candidateService:CandidateService,
              private collectorService: CollectorService,
              private districtService:DistrictService,
              private modalService:ModalService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.collectorData = null
    this.candidateService.getAll().subscribe((response:any) => {
      // console.log(response)
      this.candidates = response.data;
    })
    this.districtService.getAll().subscribe((response:any) => {
      this.districts = response.data;
    })
    this.collectorService.getOne(this.id).subscribe((response:any) => {
      console.log(response);
      this.collectorData = response.data;
      this.form.patchValue({
        candidate_id: this.collectorData.candidate_id,
        district_id: this.collectorData.district_id,
        collector_about: this.collectorData.collector_about,
      })
    })
  }


  onSubmit() {
    console.log(this.form.value);
    let formData = new FormData
    formData.append('_method', 'PUT')
    let formValue:any = this.form.value;
    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
      formData.append(key, value);
    }
    this.collectorService.edit(this.id,formData).subscribe({
      next: data => {
        this.modalService.show("success","Collecteur Modifié avec succès");
        this.router.navigateByUrl('/admin/gestion-collecteurs/id/'+this.id);

      },
      error: (err:any) => {
        console.log(err);
        this.modalService.show("danger", "Une erreur est survenue!", false);
      }
    })
  }

}
