import {Component, ViewChild} from '@angular/core';
import {ElectorInfosComponent} from '../../../elector/components/elector-infos/elector-infos.component';

@Component({
  selector: 'app-collector-infos',
  standalone: true,
  imports: [
    ElectorInfosComponent
  ],
  templateUrl: './collector-infos.component.html',
  styleUrl: './collector-infos.component.css'
})
export class CollectorInfosComponent {
@ViewChild(ElectorInfosComponent, {static:true}) infos!: ElectorInfosComponent;
}
