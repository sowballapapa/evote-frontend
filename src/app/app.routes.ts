import { Routes } from '@angular/router';
import { HomeComponent } from './guest/components/home/home.component';
import { SponsorshipsComponent } from './guest/components/sponsorships/sponsorships.component';
import { ElectionsComponent } from './guest/components/elections/elections.component';
import { AboutComponent } from './guest/components/about/about.component';
import { ContactsComponent } from './guest/components/contacts/contacts.component';
import {AdminBaseComponent} from './admin/components/admin-base/admin-base.component';
import {DashboardComponent} from './admin/components/dashboard/dashboard.component';
import {GuestBaseComponent} from './guest/components/guest-base/guest-base.component';
import {AdminLoginComponent} from './admin/components/admin-login/admin-login.component';
import {SponsorshipsBaseComponent} from './sponsorships/components/sponsorships-base/sponsorships-base.component';
import {
  SponsoringElectorBaseComponent
} from './sponsorships/elector/components/sponsoring-elector-base/sponsoring-elector-base.component';
import {ElectionsBaseComponent} from './elections/components/elections-base/elections-base.component';
import {
  PollingStationLoginComponent
} from './elections/components/polling-station-login/polling-station-login.component';
import {PollingStationHomeComponent} from './elections/components/polling-station-home/polling-station-home.component';
import {VoteComponent} from './elections/components/vote/vote.component';
import { adminAuthChildGuard, adminAuthGuardGuard, adminLoginGuard } from './admin/guards/admin-auth-guard.guard';
import { BaseCandidateComponent } from './sponsorships/candidate/components/base-candidate/base-candidate.component';
import { AdminElectorsIndexComponent } from './admin/components/others-pages/g_electors/admin-electors-index/admin-electors-index.component';
import { AdminElectorsViewComponent } from './admin/components/others-pages/g_electors/admin-electors-view/admin-electors-view.component';
import { AdminElectorsCreateComponent } from './admin/components/others-pages/g_electors/admin-electors-create/admin-electors-create.component';
import { AdminElectorsEditComponent } from './admin/components/others-pages/g_electors/admin-electors-edit/admin-electors-edit.component';
import { AdminUsersIndexComponent } from './admin/components/others-pages/g_users/admin-users-index/admin-users-index.component';
import { AdminUsersViewComponent } from './admin/components/others-pages/g_users/admin-users-view/admin-users-view.component';
import { AdminUsersCreateComponent } from './admin/components/others-pages/g_users/admin-users-create/admin-users-create.component';
import { AdminUsersEditComponent } from './admin/components/others-pages/g_users/admin-users-edit/admin-users-edit.component';
import { AdminDgeUsersIndexComponent } from './admin/components/others-pages/g_dge-users/admin-dge-users-index/admin-dge-users-index.component';
import { AdminDgeUsersViewComponent } from './admin/components/others-pages/g_dge-users/admin-dge-users-view/admin-dge-users-view.component';
import { AdminDgeUsersCreateComponent } from './admin/components/others-pages/g_dge-users/admin-dge-users-create/admin-dge-users-create.component';
import { AdminDgeUsersEditComponent } from './admin/components/others-pages/g_dge-users/admin-dge-users-edit/admin-dge-users-edit.component';
import { AdminCandidatesIndexComponent } from './admin/components/others-pages/g_candidates/admin-candidates-index/admin-candidates-index.component';
import { AdminCandidatesViewComponent } from './admin/components/others-pages/g_candidates/admin-candidates-view/admin-candidates-view.component';
import { AdminCandidatesCreateComponent } from './admin/components/others-pages/g_candidates/admin-candidates-create/admin-candidates-create.component';
import { AdminCandidatesEditComponent } from './admin/components/others-pages/g_candidates/admin-candidates-edit/admin-candidates-edit.component';
import { AdminSystemeHomeComponent } from './admin/components/others-pages/tab_systems/admin-systeme-home/admin-systeme-home.component';
import { AdminDgeDetailsIndexComponent } from './admin/components/others-pages/tab_systems/dge/admin-dge-details-index/admin-dge-details-index.component';
import { AdminElectionsDetailsIndexComponent } from './admin/components/others-pages/tab_systems/elections/admin-elections-details-index/admin-elections-details-index.component';
import { AdminElectionsDetailsEditComponent } from './admin/components/others-pages/tab_systems/elections/admin-elections-details-edit/admin-elections-details-edit.component';
import { AdminSponsorshipsDetailsIndexComponent } from './admin/components/others-pages/tab_systems/sponsorships/admin-sponsorships-details-index/admin-sponsorships-details-index.component';
import { AdminSponsorshipsDetailsEditComponent } from './admin/components/others-pages/tab_systems/sponsorships/admin-sponsorships-details-edit/admin-sponsorships-details-edit.component';
import { AdminPartiesIndexComponent } from './admin/components/others-pages/g_parties/admin-parties-index/admin-parties-index.component';
import { AdminPartiesViewComponent } from './admin/components/others-pages/g_parties/admin-parties-view/admin-parties-view.component';
import { AdminPartiesCreateComponent } from './admin/components/others-pages/g_parties/admin-parties-create/admin-parties-create.component';
import { AdminPartiesEditComponent } from './admin/components/others-pages/g_parties/admin-parties-edit/admin-parties-edit.component';
import { AdminPollingsIndexComponent } from './admin/components/others-pages/g_pollings/admin-pollings-index/admin-pollings-index.component';
import { AdminPollingsCreateComponent } from './admin/components/others-pages/g_pollings/admin-pollings-create/admin-pollings-create.component';
import { AdminPollingsViewComponent } from './admin/components/others-pages/g_pollings/admin-pollings-view/admin-pollings-view.component';
import { AdminPollingsEditComponent } from './admin/components/others-pages/g_pollings/admin-pollings-edit/admin-pollings-edit.component';
import {ElectorLoginComponent} from './sponsorships/elector/components/elector-login/elector-login.component';
import {ElectorRegisterComponent} from './sponsorships/elector/components/elector-register/elector-register.component';
import {LandingPageComponent} from './sponsorships/components/landing-page/landing-page.component';
import {electorAuthChildGuard, electorLoginGuard} from './sponsorships/elector/guards/elector-auth.guard';
import {ElectorHomeComponent} from './sponsorships/elector/components/elector-home/elector-home.component';
import {ElectorInfosComponent} from './sponsorships/elector/components/elector-infos/elector-infos.component';
import {
  ElectorCandidateInfosComponent
} from './sponsorships/elector/components/elector-candidate-infos/elector-candidate-infos.component';

export const routes: Routes = [
  //routes Guest
  {
    path:'',
    component:GuestBaseComponent,
    children:[
      {path: '', component: HomeComponent, title: 'E-vote | Accueil'},
      {path:'parrainages', component:SponsorshipsComponent, title: 'E-vote | Parrainages'},
      {path:'elections', component:ElectionsComponent, title: 'E-vote | Elections'},
      {path:'a-propos', component:AboutComponent, title: 'E-vote | A-propos'},
      {path:'contacts', component:ContactsComponent, title: 'E-vote | Contact'},
    ]
  },

  //route Administrators
  {
    path:'admin',
    component:AdminBaseComponent,
    children:[
      {path:'login', component: AdminLoginComponent, title: 'E-vote | Connexion Administrateur', data:[{noLoggin:true}], canActivate:[adminLoginGuard]},
      {
      path:'',
      canActivateChild:[adminAuthChildGuard],
      data:[{noLoggin:false}],
      children:[
        // {path:'', redirectTo: 'login', pathMatch:'full'},
        {path:'', component: DashboardComponent, title: 'E-vote | Dashboard Administrateur'},
        {path:'gestion-electeurs', component:AdminElectorsIndexComponent, children:[
          {path:'', component:AdminElectorsIndexComponent, },
          {path:'electeur:id', component:AdminElectorsViewComponent},
          {path:'nouvel-electeur', component:AdminElectorsCreateComponent},
          {path:'modifier/electeur:id', component:AdminElectorsEditComponent}
        ]},
        {path:'gestion-comptes', component:AdminUsersIndexComponent,children:[
          {path:'', component:AdminUsersIndexComponent, },
          {path:'compte:id', component:AdminUsersViewComponent},
          {path:'nouveau-compte', component:AdminUsersCreateComponent},
          {path:'modifier/compte:id', component:AdminUsersEditComponent}
        ]},
        {path:'gestion-admin', component:AdminDgeUsersIndexComponent, children:[
          {path:'', component:AdminDgeUsersIndexComponent, },
          {path:'membre-dge:id', component:AdminDgeUsersViewComponent},
          {path:'nouveau-membre-dge', component:AdminDgeUsersCreateComponent},
          {path:'modifier/membre-dge:id', component:AdminDgeUsersEditComponent}

        ]},
        {path:'gestion-partis-coalitions', component:AdminPartiesIndexComponent, children:[
          {path:'', component: AdminPartiesIndexComponent},
          {path:'parti-coalition:id', component: AdminPartiesViewComponent},
          {path:'nouveau', component: AdminPartiesCreateComponent},
          {path:'modifier/parti-coalition:id', component:AdminPartiesEditComponent}
        ]},
        {path:'gestion-candidats', component: AdminCandidatesIndexComponent, children:[
          {path:'', component:AdminCandidatesIndexComponent, },
          {path:'candidat:id', component:AdminCandidatesViewComponent},
          {path:'nouveau-candidat', component:AdminCandidatesCreateComponent},
          {path:'modifier/candidat:id', component:AdminCandidatesEditComponent}

        ]},
        {path:'gestion-systemes', component:AdminSystemeHomeComponent, children:[
          {path:'dge-infos', component:AdminDgeDetailsIndexComponent,children:[
            {path:'', component:AdminDgeDetailsIndexComponent},
            {path:'modifier', component:AdminDgeUsersEditComponent}
          ]},
          {path:'elections-infos', component: AdminElectionsDetailsIndexComponent, children:[
            {path:'', component:AdminElectionsDetailsIndexComponent},
            {path:'modifier', component: AdminElectionsDetailsEditComponent}
          ]},
          {path:'parrainages-infos', component: AdminSponsorshipsDetailsIndexComponent, children:[
            {path:'', component: AdminSponsorshipsDetailsIndexComponent},
            {path:'modifier', component: AdminSponsorshipsDetailsEditComponent}
          ]}
        ]},
        {path:'gestion-bureaux-de-votes', component:AdminPollingsIndexComponent, children:[
          {path:'', component:AdminPollingsIndexComponent},
          {path:'nouveau', component:AdminPollingsCreateComponent},
          {path:'bureau:id', component:AdminPollingsViewComponent},
          {path:'modifier/bureau:id', component:AdminPollingsEditComponent}
        ]},
        /*
        {path:'gestion-parrainages'},
        {path:'gestion-elections'},
        {path:'gestion-priviliges'},

        */
      ]
    }
      ]
  },
  //route sponsorships
  {
    path: 'evote-parrainages',
    component: SponsorshipsBaseComponent,
    children:[
      {path: '', component: LandingPageComponent},
      {
        path:'candidat',
        component: BaseCandidateComponent,
        children: [
          // {}
        ]
      },
      {
        path: 'electeur',
        component: SponsoringElectorBaseComponent,
        children:[
          {path: 'connection', component: ElectorLoginComponent,  data:[{noLoggin:true}], canActivate: [electorLoginGuard]},
          {path: 'inscription', component: ElectorRegisterComponent, data:[{noLoggin:true}], canActivate: [electorLoginGuard]},
          {
            path: '',
            canActivateChild: [electorAuthChildGuard],
            data:[{noLoggin:false}],
            children:[
              {path:'', component: ElectorHomeComponent, title:'Parrainages | Accueil des électeurs'},
              {path: 'mes_infos', component: ElectorInfosComponent, title: 'Mes Infos'},
              {path: 'mon_candidat', component: ElectorCandidateInfosComponent, title: 'Mon Candidat'},
            ]
          }
        ]
      }
    ]
  },

  //route elections
  {
    path:'evote-elections',
    component:ElectionsBaseComponent,
    children:[
      {path:'login', component: PollingStationLoginComponent, title: 'E-vote | Bureaux de Votes| Connexion '},
      {path: ':id', component: PollingStationHomeComponent, title: 'E-vote | Bureaux de Votes| Accueil'},
      {path: 'bureau:id/electeur:id', component: VoteComponent, title: 'E-vote | Elections | Vote'}
    ]
  }


];
