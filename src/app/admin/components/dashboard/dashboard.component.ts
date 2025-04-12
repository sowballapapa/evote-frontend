import { Component } from '@angular/core';
import {DashboardService} from '../../services/dashboard.service';
import {NgIf} from '@angular/common';

@Component({
    selector: 'app-dashboard',
  imports: [
    NgIf
  ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  stats1:any

  constructor(private service: DashboardService) {}

  ngOnInit() {
    this.service.getSats().subscribe((response:any) => {
      console.log(response);
      this.stats1=response.data;
    })
  }
}
