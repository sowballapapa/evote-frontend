import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {UserAdminService} from '../../../../../services/comptes/user-admin.service';
import {environment} from '../../../../../../../environments/environment.development';
import {PrivilegesService} from '../../../../../services/privileges.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-admin-acc-privileges-view',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgIf
  ],
  templateUrl: './admin-acc-privileges-view.component.html',
  styleUrl: './admin-acc-privileges-view.component.css'
})
export class AdminAccPrivilegesViewComponent {
  titleElement?: string;
  id!:any
  dgeUser!:any
  dgeUserId!:any
  privileges!:any
  adminPrivileges!:any

  constructor(private router: Router,
              private route:ActivatedRoute,
              private privilegeService: PrivilegesService,
              private adminService:UserAdminService) {
    this.id = this.route.snapshot.params['id'];
  }

  goBack() {
    return this.router.navigate(['../../'], {relativeTo: this.route});
  }
  privileges_table:any = []

  ngOnInit() {

    this.adminService.getOne(this.id).subscribe((res:any)=>{
      this.dgeUser = res.data;
      this.dgeUserId= this.dgeUser.id;
      this.titleElement = "Modfication des privilèges de l'utilisateur:"+this.dgeUser.firstname+' '+this.dgeUser.lastname;
      this.privilegeService.getAdminPrivileges(this.dgeUserId).subscribe((res:any)=>{
        console.log(res);
        this.adminPrivileges =res.data;
      })
    })

    this.privilegeService.getAll().subscribe((res:any)=>{
      console.log(res);
      this.privileges = res.data;
    })

  }

  // togglePrivilege(privilegeId: number, checked: boolean) {
  //   if (checked) {
  //     // Ajouter le privilège
  //     let privi = {
  //       privilege_sys_id: privilegeId
  //     };
  //     this.privilegeService.addAdminPrivilege(this.dgeUserId, privi).subscribe((res:any)=>{
  //       console.log(res);
  //     })
  //   } else {
  //     // Retirer le privilège
  //     let privi = {
  //       privilege_sys_id: privilegeId,
  //       dge_user_id: this.dgeUserId,
  //     };
  //     this.privilegeService.addAdminPrivilege(this.dgeUserId, privi).subscribe((res:any)=>{
  //       console.log(res);
  //     })
  //   }
  // }

  togglePrivilege(privilegeId: number, event:any) {
    if (event.target.checked) {
      const data = {
        dge_user_id: this.dgeUserId,
        privilege_sys_id: privilegeId
      };
      this.privilegeService.addAdminPrivilege( data).subscribe((res: any) => {
        this.adminPrivileges.push(privilegeId); // mise à jour immédiate
      });
    } else {
      const data = {
        dge_user_id: this.dgeUserId,
        privilege_sys_id: privilegeId
      };
      this.privilegeService.removeAdminPrivilege(this.dgeUserId, data).subscribe((res: any) => {
        this.adminPrivileges = this.adminPrivileges.filter((p:any) => p !== privilegeId);
      });
    }
  }

  hasPrivilege(privilegeId: number): boolean {
    return !!this.adminPrivileges?.some((ap: any) => ap.privilege_sys_id === privilegeId);
  }
  protected readonly environment = environment;
}
