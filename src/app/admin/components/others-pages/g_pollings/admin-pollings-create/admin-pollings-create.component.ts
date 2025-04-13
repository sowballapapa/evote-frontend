import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {VotingPlaceService} from '../../../../services/voting-place.service';
import {NgClass, NgIf,} from '@angular/common';
import {PollingStationService} from '../../../../services/polling-station.service';
import {ModalService} from '../../../../../core/services/modal.service';

@Component({
    selector: 'app-admin-pollings-create',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    NgIf,
  ],
    templateUrl: './admin-pollings-create.component.html',
    styleUrl: './admin-pollings-create.component.css'
})
export class AdminPollingsCreateComponent {


  constructor(private vpService: VotingPlaceService,
              private pollService:PollingStationService,
              private modalService:ModalService,
              private route: ActivatedRoute,
              private router: Router) {
  }
  id!:any
  votingPlace!:any

  goBack() {
    return this.router.navigate(['../../'], {relativeTo: this.route});
  }

  form = new FormGroup({
    voting_place_id: new FormControl(null, [Validators.required]),
    stationNumber: new FormControl(null, [Validators.required]),
  })
  nums!:any[]
  polls!: any[];

  ngOnInit() {
    this.nums = []
    this.polls = []
    const path = window.location.pathname.split('/')
    this.id = path[4]
    // console.log('id', this.id)
    this.vpService.getOne(this.id).subscribe((res:any)=>{
      console.log(res)
      this.form.patchValue({
        voting_place_id:res.data.id,
      })
      this.votingPlace = res.data;
      res.data.polling_station.map((station:any)=>{
        this.polls.push(station.stationNumber)
      })
    })
    for (let i=1;i<=30; i++) {
      this.nums.push({
        id: i,
        value: i
      })
    }
    this.nums.concat({length:30})

    console.log('polls',this.polls)
  }

  onSubmit() {
    this.pollService.create(this.form.value).subscribe((res:any)=>{
      this.modalService.show("success", "Bureau créé avec succès!")
      window.location.reload();
    })

  }

  protected readonly Array = Array;
}

interface NUM{
  id:number,
  value:number
}
