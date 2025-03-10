import {Component, inject, Input} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-view-element',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './view-element.component.html',
  styleUrl: './view-element.component.css'
})
export class ViewElementComponent {
 @Input() titleElement?: string;

  router = inject(Router)
  route = inject(ActivatedRoute)

  id =this.route.snapshot.params['id'];
  @Input() fields?:Field[] = [  ]

  ngOnInit() {
  }
  goBack() {
    return this.router.navigate(['../../'], {relativeTo: this.route});
  }

  onEdit(id: any) {
    return this.router.navigate(['../../modifier/'+id], {relativeTo: this.route});

  }

  onDelete(id: any) {

  }
}


export interface Field{
  title: string;
  value: string;
}
