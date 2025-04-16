import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {environment} from '../../../../../../environments/environment.development';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-admin-user-password-reset',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './admin-user-password-reset.component.html',
  styleUrl: './admin-user-password-reset.component.css'
})
export class AdminUserPasswordResetComponent {
  user: any;
  titleElement?: string;
  userId!:any
  id!:any
  constructor(private router:Router, private route: ActivatedRoute, private  userService: UserService) {
    this.id = this.route.snapshot.params['id'];
  }

  goBack() {
    this.router.navigate(['../../'], {relativeTo: this.route});
  }

  ngOnInit() {
    this.userService.getUser(this.id).subscribe((res: any) => {
      this.user = res.data;
      this.titleElement = "Modification de Mot de passe pour l'utilisateur avec l'Id:"+this.user.id;
    })
  }
  protected readonly environment = environment;
}
