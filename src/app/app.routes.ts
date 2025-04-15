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
import { adminAuthChildGuard,  adminLoginGuard } from './admin/guards/admin-auth-guard.guard';
import { BaseCandidateComponent } from './sponsorships/candidate/components/base-candidate/base-candidate.component';
import { AdminElectorsIndexComponent } from './admin/components/others-pages/g_electors/admin-electors-index/admin-electors-index.component';
import { AdminElectorsViewComponent } from './admin/components/others-pages/g_electors/admin-electors-view/admin-electors-view.component';
import { AdminElectorsCreateComponent } from './admin/components/others-pages/g_electors/admin-electors-create/admin-electors-create.component';
import { AdminElectorsEditComponent } from './admin/components/others-pages/g_electors/admin-electors-edit/admin-electors-edit.component';

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
import {
  AdminUsersBaseComponent
} from './admin/components/others-pages/g_users/admin-users-base/admin-users-base.component';
import {
  AdminElectorsBaseComponent
} from './admin/components/others-pages/g_electors/admin-electors-base/admin-electors-base.component';
import {
  AdminDgeUsersBaseComponent
} from './admin/components/others-pages/g_dge-users/admin-dge-users-base/admin-dge-users-base.component';
import {
  AdminPartiesBaseComponent
} from './admin/components/others-pages/g_parties/admin-parties-base/admin-parties-base.component';
import {
  AdminCandidatesBaseComponent
} from './admin/components/others-pages/g_candidates/admin-candidates-base/admin-candidates-base.component';
import {
  AdminPollingsBaseComponent
} from './admin/components/others-pages/g_pollings/admin-pollings-base/admin-pollings-base.component';
import {
  AdminRolesBaseComponent
} from './admin/components/others-pages/g_roles/admin-roles-base/admin-roles-base.component';
import {
  AdminRolesIndexComponent
} from './admin/components/others-pages/g_roles/admin-roles-index/admin-roles-index.component';
import {
  AdminRolesViewComponent
} from './admin/components/others-pages/g_roles/admin-roles-view/admin-roles-view.component';
import {
  AdminRolesCreateComponent
} from './admin/components/others-pages/g_roles/admin-roles-create/admin-roles-create.component';
import {
  AdminRolesEditComponent
} from './admin/components/others-pages/g_roles/admin-roles-edit/admin-roles-edit.component';
import {
  AdminAdminBaseComponent
} from './admin/components/others-pages/g_users/g_users_admins/admin-admin-base/admin-admin-base.component';
import {
  AdminAdminIndexComponent
} from './admin/components/others-pages/g_users/g_users_admins/admin-admin-index/admin-admin-index.component';
import {
  AdminAdminViewComponent
} from './admin/components/others-pages/g_users/g_users_admins/admin-admin-view/admin-admin-view.component';
import {
  AdminAdminCreateComponent
} from './admin/components/others-pages/g_users/g_users_admins/admin-admin-create/admin-admin-create.component';
import {
  AdminAdminEditComponent
} from './admin/components/others-pages/g_users/g_users_admins/admin-admin-edit/admin-admin-edit.component';
import {
  AdminAccCandidatesBaseComponent
} from './admin/components/others-pages/g_users/g_users_candidates/admin-acc-candidates-base/admin-acc-candidates-base.component';
import {
  AdminAccCandidatesViewComponent
} from './admin/components/others-pages/g_users/g_users_candidates/admin-acc-candidates-view/admin-acc-candidates-view.component';
import {
  AdminAccCandidatesCreateComponent
} from './admin/components/others-pages/g_users/g_users_candidates/admin-acc-candidates-create/admin-acc-candidates-create.component';
import {
  AdminAccCandidatesEditComponent
} from './admin/components/others-pages/g_users/g_users_candidates/admin-acc-candidates-edit/admin-acc-candidates-edit.component';
import {
  AdminAccElectorsBaseComponent
} from './admin/components/others-pages/g_users/g_users_electors/admin-acc-electors-base/admin-acc-electors-base.component';
import {
  AdminAccElectorsIndexComponent
} from './admin/components/others-pages/g_users/g_users_electors/admin-acc-electors-index/admin-acc-electors-index.component';
import {
  AdminAccElectorsCreateComponent
} from './admin/components/others-pages/g_users/g_users_electors/admin-acc-electors-create/admin-acc-electors-create.component';
import {
  AdminAccElectorsEditComponent
} from './admin/components/others-pages/g_users/g_users_electors/admin-acc-electors-edit/admin-acc-electors-edit.component';
import {
  AdminAccPollingsBaseComponent
} from './admin/components/others-pages/g_users/g_users_pollings/admin-acc-pollings-base/admin-acc-pollings-base.component';
import {
  AdminAccPollingsIndexComponent
} from './admin/components/others-pages/g_users/g_users_pollings/admin-acc-pollings-index/admin-acc-pollings-index.component';
import {
  AdminAccPollingsCreateComponent
} from './admin/components/others-pages/g_users/g_users_pollings/admin-acc-pollings-create/admin-acc-pollings-create.component';
import {
  AdminAccPollingsEditComponent
} from './admin/components/others-pages/g_users/g_users_pollings/admin-acc-pollings-edit/admin-acc-pollings-edit.component';
import {
  AdminAccPrivilegesBaseComponent
} from './admin/components/others-pages/g_users/g_users_privileges/admin-acc-privileges-base/admin-acc-privileges-base.component';
import {
  AdminAccPrivilegesIndexComponent
} from './admin/components/others-pages/g_users/g_users_privileges/admin-acc-privileges-index/admin-acc-privileges-index.component';
import {
  AdminAccPrivilegesViewComponent
} from './admin/components/others-pages/g_users/g_users_privileges/admin-acc-privileges-view/admin-acc-privileges-view.component';
import {
  AdminAccPrivilegesCreateComponent
} from './admin/components/others-pages/g_users/g_users_privileges/admin-acc-privileges-create/admin-acc-privileges-create.component';
import {
  AdminAccPrivilegesEditComponent
} from './admin/components/others-pages/g_users/g_users_privileges/admin-acc-privileges-edit/admin-acc-privileges-edit.component';
import {
  AdminGElectionsBaseComponent
} from './admin/components/others-pages/g_elections/admin-g-elections-base/admin-g-elections-base.component';

import {
  AdminGElectionsConfigComponent
} from './admin/components/others-pages/g_elections/admin-g-elections-config/admin-g-elections-config.component';
import {
  AdminGSponsorshipsBaseComponent
} from './admin/components/others-pages/g_sponsorships/admin-g-sponsorships-base/admin-g-sponsorships-base.component';
import {
  AdminGSponsorshipsHomeComponent
} from './admin/components/others-pages/g_sponsorships/admin-g-sponsorships-home/admin-g-sponsorships-home.component';
import {
  AdminGSponsorshipsConfigComponent
} from './admin/components/others-pages/g_sponsorships/admin-g-sponsorships-config/admin-g-sponsorships-config.component';
import {
  AdminElectionsDetailsBaseComponent
} from './admin/components/others-pages/tab_systems/elections/admin-elections-details-base/admin-elections-details-base.component';
import {
  AdminSponsorshipsDetsBaseComponent
} from './admin/components/others-pages/tab_systems/sponsorships/admin-sponsorships-dets-base/admin-sponsorships-dets-base.component';
import {
  AdminDgeDetailsBaseComponent
} from './admin/components/others-pages/tab_systems/dge/admin-dge-details-base/admin-dge-details-base.component';
import {
  AdminVotingPlacesBaseComponent
} from './admin/components/others-pages/g_votingPlaces/admin-voting-places-base/admin-voting-places-base.component';
import {
  AdminVotingPlacesIndexComponent
} from './admin/components/others-pages/g_votingPlaces/admin-voting-places-index/admin-voting-places-index.component';
import {
  AdminVotingPlacesCreateComponent
} from './admin/components/others-pages/g_votingPlaces/admin-voting-places-create/admin-voting-places-create.component';
import {
  AdminVotingPlacesEditComponent
} from './admin/components/others-pages/g_votingPlaces/admin-voting-places-edit/admin-voting-places-edit.component';
import {
  AdminVotingPlacesViewComponent
} from './admin/components/others-pages/g_votingPlaces/admin-voting-places-view/admin-voting-places-view.component';
import {
  AdminDgeDetailsEditComponent
} from './admin/components/others-pages/tab_systems/dge/admin-dge-details-edit/admin-dge-details-edit.component';
import {
  AdminAccCandidatesIndexComponent
} from './admin/components/others-pages/g_users/g_users_candidates/admin-acc-candidates-index/admin-acc-candidates-index.component';
import {LoginCandidateComponent} from './sponsorships/candidate/components/login-candidate/login-candidate.component';
import {CandidateHomeComponent} from './sponsorships/candidate/components/candidate-home/candidate-home.component';
import {CandidateInfosComponent} from './sponsorships/candidate/components/candidate-infos/candidate-infos.component';

import {
  CandidateElectorsComponent
} from './sponsorships/candidate/components/candidate-electors/candidate-electors.component';
import {candidateAuthChildGuard, candidateLoginGuard} from './sponsorships/candidate/guards/candidate-auth.guard';
import {CollectorBaseComponent} from './sponsorships/collector/components/collector-base/collector-base.component';
import {CollectorLoginComponent} from './sponsorships/collector/components/collector-login/collector-login.component';
import {CollectorHomeComponent} from './sponsorships/collector/components/collector-home/collector-home.component';
import {CollectorInfosComponent} from './sponsorships/collector/components/collector-infos/collector-infos.component';
import {
  CollectorElectorsComponent
} from './sponsorships/collector/components/collector-electors/collector-electors.component';
import {
  CollectorCandidateComponent
} from './sponsorships/collector/components/collector-candidate/collector-candidate.component';
import {collectorAuthChildGuard, collectorLoginGuard} from './sponsorships/collector/guards/collector-auth.guard';
import {
  AdminAccCollectorsBaseComponent
} from './admin/components/others-pages/g_users/g_users_collectors/admin-acc-collectors-base/admin-acc-collectors-base.component';
import {
  AdminAccCollectorsIndexComponent
} from './admin/components/others-pages/g_users/g_users_collectors/admin-acc-collectors-index/admin-acc-collectors-index.component';
import {
  AdminAccCollectorsViewComponent
} from './admin/components/others-pages/g_users/g_users_collectors/admin-acc-collectors-view/admin-acc-collectors-view.component';
import {
  AdminAccCollectorsCreateComponent
} from './admin/components/others-pages/g_users/g_users_collectors/admin-acc-collectors-create/admin-acc-collectors-create.component';
import {
  AdminAccCollectorsEditComponent
} from './admin/components/others-pages/g_users/g_users_collectors/admin-acc-collectors-edit/admin-acc-collectors-edit.component';
import {
  AdminCollectorsBaseComponent
} from './admin/components/others-pages/g_collectors/admin-collectors-base/admin-collectors-base.component';
import {
  AdminCollectorsIndexComponent
} from './admin/components/others-pages/g_collectors/admin-collectors-index/admin-collectors-index.component';
import {
  AdminCollectorsViewComponent
} from './admin/components/others-pages/g_collectors/admin-collectors-view/admin-collectors-view.component';
import {
  AdminCollectorsCreateComponent
} from './admin/components/others-pages/g_collectors/admin-collectors-create/admin-collectors-create.component';
import {
  AdminCollectorsEditComponent
} from './admin/components/others-pages/g_collectors/admin-collectors-edit/admin-collectors-edit.component';
import {
  CandidateCollectorsComponent
} from './sponsorships/candidate/components/candidate-collectors/candidate-collectors.component';
import {CandidatureComponent} from './sponsorships/elector/components/candidature/candidature.component';
import {ParrainerComponent} from './sponsorships/elector/components/parrainer/parrainer.component';
import {Erreur403Component} from './core/components/errors/erreur403/erreur403.component';
import {Erreur404Component} from './core/components/errors/erreur404/erreur404.component';
import {AccountComponent} from './core/components/account/account.component';
import {GetCniDatasComponent} from './core/components/get-cni-datas/get-cni-datas.component';
import {AdminHelpComponent} from './admin/components/admin-help/admin-help.component';
import {AboutEvoteComponent} from './core/components/about-evote/about-evote.component';
import {
  AdminVotingPlacesViewBaseComponent
} from './admin/components/others-pages/g_votingPlaces/admin-voting-places-view-base/admin-voting-places-view-base.component';
import {
  AdminLocalitesBaseComponent
} from './admin/components/others-pages/g_localites/admin-localites-base/admin-localites-base.component';
import {
  AdminGSponsorshipsValidatedComponent
} from './admin/components/others-pages/g_sponsorships/admin-g-sponsorships-validated/admin-g-sponsorships-validated.component';
import {
  AdminGSponsorshipsParticipationsComponent
} from './admin/components/others-pages/g_sponsorships/admin-g-sponsorships-participations/admin-g-sponsorships-participations.component';
import {
  AdminGElectionsResultsPollingResultsBaseComponent
} from './admin/components/others-pages/g_elections/admin-g-elections-results-polling-results-base/admin-g-elections-results-polling-results-base.component';
import {
  AdminGElectionsResultsCandidatesComponent
} from './admin/components/others-pages/g_elections/admin-g-elections-results-candidates/admin-g-elections-results-candidates.component';
import {
  AdminGElectionsResultsCandidateComponent
} from './admin/components/others-pages/g_elections/admin-g-elections-results-candidate/admin-g-elections-results-candidate.component';
import { AdminGElectionsHomeComponent } from './admin/components/others-pages/g_elections/admin-g-elections-home/admin-g-elections-home.component';
import {
  AdminGSponsorshipsResultsCandidatesComponent
} from './admin/components/others-pages/g_sponsorships/admin-g-sponsorships-results-candidates/admin-g-sponsorships-results-candidates.component';

export const routes: Routes = [
  {path:'unauthorized', component:Erreur403Component},
  {path:'notfound', component:Erreur404Component},
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
      {path:'login', component: AdminLoginComponent, title: 'E-vote | Connexion Administrateur',  canActivate:[adminLoginGuard]},
      {
      path:'',
      canActivateChild:[adminAuthChildGuard],
      children:[
        {path:'aide', component:AdminHelpComponent, title: 'Aide'},
        {path:'a-propos', component:AboutEvoteComponent, title: 'A-propos d\'Evote'},
        {path:'mon_compte', component:AccountComponent, title: 'Mon Compte'},
        {path:'cni_infos', component:GetCniDatasComponent, title: 'Mes données CNI'},
        {path:'', component: DashboardComponent, title: 'E-vote | Dashboard Administrateur'},
        {path:'gestion-electeurs', component:AdminElectorsBaseComponent, children:[
          {path:'', component:AdminElectorsIndexComponent, },
          {path:'id/:id', component:AdminElectorsViewComponent},
          {path:'nouveau', component:AdminElectorsCreateComponent},
          {path:'modifier/:id', component:AdminElectorsEditComponent}
        ]},
        {path:'gestion-comptes', component:AdminUsersBaseComponent,children:[
            {path: 'admins', component: AdminAdminBaseComponent, children: [
                {path:'', component:AdminAdminIndexComponent},
                {path:'id/:id', component:AdminAdminViewComponent},
                {path:'nouveau', component:AdminAdminCreateComponent},
                {path:'modifier/:id', component:AdminAdminEditComponent},
              ]},
            {path: 'privileges', component: AdminAccPrivilegesBaseComponent, children: [
                {path:'', component:AdminAccPrivilegesIndexComponent},
                {path:'id/:id', component:AdminAccPrivilegesViewComponent},
                {path:'nouveau', component:AdminAccPrivilegesCreateComponent},
                {path:'modifier/:id', component:AdminAccPrivilegesEditComponent},
              ]},
            {path: 'candidats', component: AdminAccCandidatesBaseComponent, children: [
                {path: '', component: AdminAccCandidatesIndexComponent},
                {path: 'id/:id', component: AdminAccCandidatesViewComponent},
                {path: 'nouveau', component:AdminAccCandidatesCreateComponent},
                {path: 'modifier/:id', component: AdminAccCandidatesEditComponent}
              ]},
            {path: 'collecteurs', component: AdminAccCollectorsBaseComponent, children: [
                {path: '', component: AdminAccCollectorsIndexComponent},
                {path: 'id/:id', component: AdminAccCollectorsViewComponent},
                {path: 'nouveau', component:AdminAccCollectorsCreateComponent},
                {path: 'modifier/:id', component: AdminAccCollectorsEditComponent}
              ]},
            {path: 'electeurs', component: AdminAccElectorsBaseComponent, children: [
                {path: '', component: AdminAccElectorsIndexComponent},
                {path: 'id/:id', component: AdminAccCandidatesViewComponent},
                {path: 'nouveau', component: AdminAccElectorsCreateComponent},
                {path: 'modifier/:id', component: AdminAccElectorsEditComponent}
              ]},
            {path: 'bureaux-de-vote', component: AdminAccPollingsBaseComponent, children: [
                {path: '', component: AdminAccPollingsIndexComponent},
                {path: 'id/:id', component: AdminAccPollingsIndexComponent},
                {path: 'nouveau', component: AdminAccPollingsCreateComponent},
                {path: 'modifier/:id', component: AdminAccPollingsEditComponent}
              ]},
        ]},
        {path:'gestion-membres-dge', component:AdminDgeUsersBaseComponent, children:[
            {path:'', component:AdminDgeUsersIndexComponent, },
            {path:'id/:id', component:AdminDgeUsersViewComponent},
            {path:'nouveau', component:AdminDgeUsersCreateComponent},
            {path:'modifier/:id', component:AdminDgeUsersEditComponent}
          ]},
        {path:'gestion-fonctions-dge', component:AdminRolesBaseComponent, children:[
            {path:'', component:AdminRolesIndexComponent, },
            {path:'id/:id', component:AdminRolesViewComponent},
            {path:'nouveau', component:AdminRolesCreateComponent},
            {path:'modifier/:id', component:AdminRolesEditComponent}
          ]},
        {path:'gestion-partis-coalitions', component:AdminPartiesBaseComponent, children:[
          {path:'', component: AdminPartiesIndexComponent},
          {path:'id/:id', component: AdminPartiesViewComponent},
          {path:'nouveau', component: AdminPartiesCreateComponent},
          {path:'modifier/:id', component:AdminPartiesEditComponent}
        ]},
        {path:'gestion-candidats', component: AdminCandidatesBaseComponent, children:[
          {path:'', component:AdminCandidatesIndexComponent, },
          {path:'id/:id', component:AdminCandidatesViewComponent},
          {path:'nouveau', component:AdminCandidatesCreateComponent},
          {path:'modifier/:id', component:AdminCandidatesEditComponent}

        ]},
        {path: 'gestion-collecteurs', component: AdminCollectorsBaseComponent, children: [
            {path: '', component: AdminCollectorsIndexComponent},
            {path: 'id/:id', component: AdminCollectorsViewComponent},
            {path: 'nouveau', component:AdminCollectorsCreateComponent},
            {path: 'modifier/:id', component: AdminCollectorsEditComponent}
          ]},
        {path:'gestion-systemes', component:AdminSystemeHomeComponent, children:[
          {path:'dge-infos', component:AdminDgeDetailsBaseComponent,children:[
            {path:'', component:AdminDgeDetailsIndexComponent},
            {path:'modifier', component:AdminDgeDetailsEditComponent},
          ]},
          {path:'elections-infos', component: AdminElectionsDetailsBaseComponent, children:[
            {path:'', component:AdminElectionsDetailsIndexComponent},
            {path:'modifier', component: AdminElectionsDetailsEditComponent}
          ]},
          {path:'parrainages-infos', component: AdminSponsorshipsDetsBaseComponent, children:[
            {path:'', component: AdminSponsorshipsDetailsIndexComponent},
            {path:'modifier', component: AdminSponsorshipsDetailsEditComponent}
          ]}
        ]},

        {path:'gestion-lieux-de-votes', component:AdminVotingPlacesBaseComponent, children:[
            {path:'', component:AdminVotingPlacesIndexComponent},
            {path:'nouveau', component:AdminVotingPlacesCreateComponent},
            {path:'id/:id', component:AdminVotingPlacesViewBaseComponent, children: [
                {path:'', component:AdminVotingPlacesViewComponent},
                {path:'gestion-bureaux-de-votes', component:AdminPollingsBaseComponent, children:[
                    {path:'nouveau', component:AdminPollingsCreateComponent},
                    {path:':id_bureau', component:AdminPollingsEditComponent}
                  ]},
              ]},
            {path:'modifier/:id', component:AdminVotingPlacesEditComponent}
          ]},
        {path:'gestion-localites', component: AdminLocalitesBaseComponent, title:'Evote| Gestion des localités'},
        // {path:'gestion-elections', component: AdminGElectionsBaseComponent, children: [
        //     {path: '', component: AdminGElectionsHomeComponent},
        //     {path: 'configuration', component: AdminGElectionsConfigComponent}
        //   ]},
        {path:'gestion-parrainages', component: AdminGSponsorshipsBaseComponent, children: [
            {path: 'configurations', component: AdminGSponsorshipsConfigComponent},
            {path: 'liste-des-parrainages-valides', component: AdminGSponsorshipsValidatedComponent },
            {path: 'liste-des-parrainages-non-valides', component: AdminGSponsorshipsHomeComponent },
            {path: 'liste-des-parrainages-participations', component: AdminGSponsorshipsParticipationsComponent },
            {path: '', component: AdminGSponsorshipsResultsCandidatesComponent },
          ]},
        {path:'gestion-elections', component: AdminGElectionsBaseComponent, children: [
            {path: '', component: AdminGElectionsConfigComponent},
            {path: 'liste-des-participants', component: AdminGElectionsHomeComponent },
            {path: 'resultats', component: AdminGElectionsResultsPollingResultsBaseComponent, children: [
                {path:'tous-les-candidats', component:AdminGElectionsResultsCandidatesComponent},
                {path:'candidat/:id', component: AdminGElectionsResultsCandidateComponent}
              ] },
            // {path: 'liste-des-elections-participations', component: AdminGSponsorshipsParticipationsComponent },
          ]},
      ]
    }
      ]
  },
  //route sponsorships
  {
    path: 'parrainages-interface',
    component: SponsorshipsBaseComponent,
    children:[
      {path: '', component: LandingPageComponent},
      {
        path:'candidat',
        component: BaseCandidateComponent,
        children: [
          {path: 'connection', component: LoginCandidateComponent, canActivate: [candidateLoginGuard]},
          {
            path: '',
            canActivateChild: [candidateAuthChildGuard],
            children:[
              {path:'', component: CandidateHomeComponent, title:'Parrainages | Accueil des candidats'},
              {path: 'mes_infos', component: CandidateInfosComponent, title: 'Mes Infos'},
              {path: 'mes_parrains', component: CandidateElectorsComponent, title: 'Mes Parrains'},
              {path: 'mes_collecteurs', component: CandidateCollectorsComponent, title: 'Mes Collecteurs'},
            ]
          }
        ]
      },{
        path:'collecteur',
        component: CollectorBaseComponent,
        children: [
          {path: 'connection', component: CollectorLoginComponent, canActivate: [collectorLoginGuard]},
          {
            path: '',
            canActivateChild: [collectorAuthChildGuard],
            children:[
              {path:'', component: CollectorHomeComponent, title:'Parrainages | Accueil des candidats'},
              {path: 'mes_infos', component: CollectorInfosComponent, title: 'Mes Infos'},
              {path: 'nos_parrains', component: CollectorElectorsComponent, title: 'Nos Parrains'},
              {path: 'mon_candidat', component: CollectorCandidateComponent, title: 'Mon Candidat'},
            ]
          }
        ]
      },
      {
        path: 'electeur',
        component: SponsoringElectorBaseComponent,
        children:[
          {path: 'connection', component: ElectorLoginComponent, canActivate: [electorLoginGuard]},
          {path: 'inscription', component: ElectorRegisterComponent, canActivate: [electorLoginGuard]},
          {
            path: '',
            canActivateChild: [electorAuthChildGuard],
            children:[
              {path:'', component: ElectorHomeComponent, title:'Parrainages | Accueil des électeurs'},
              {path: 'mes_infos', component: ElectorInfosComponent, title: 'Mes Infos'},
              {path: 'mon_candidat', component: ElectorCandidateInfosComponent, title: 'Mon Candidat'},
              {path: 'candidature/:id', component: CandidatureComponent, title: 'Candidature'},
              {path: 'parrainer/:id', component: ParrainerComponent, title: 'Parrainer'},
            ]
          }
        ]
      }
    ]
  },

  //route elections
  {
    path:'elections-interface',
    component:ElectionsBaseComponent,
    children:[
      {path:'login', component: PollingStationLoginComponent, title: 'E-vote | Bureaux de Votes| Connexion '},
      {path: ':id', component: PollingStationHomeComponent, title: 'E-vote | Bureaux de Votes| Accueil'},
      {path: 'bureau:id/electeur:id', component: VoteComponent, title: 'E-vote | Elections | Vote'}
    ]
  }
];
