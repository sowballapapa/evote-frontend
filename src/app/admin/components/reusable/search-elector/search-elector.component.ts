import {Component, inject, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {environment} from '../../../../../environments/environment.development';
import {CollectorService} from '../../../../sponsorships/collector/services/collector.service';

@Component({
  selector: 'app-search-elector',
  standalone: true,
    imports: [
        FormsModule,
    ],
  templateUrl: './search-elector.component.html',
  styleUrl: './search-elector.component.css'
})
export class SearchElectorComponent {
  @Input() errors!: boolean;
  @Input() showResult!: boolean;
  @Input() cniNumber!: any;
  @Input() elector!: string;
  @Input() storageurl = environment.storageUrl;

  constructor(private searchElectorService:CollectorService) {
  }

  ngOnInit() {

  }
  onSearch() {

  }
}
