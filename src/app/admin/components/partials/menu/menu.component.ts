import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-menu',
  imports: [RouterLink, FormsModule],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css'
})
export class MenuComponent {
  tabsSys = true
  tabsMDGE = true
  tabsCompte  = true
  tabspollLoc = true
  showTabsMDge() {
    this.tabsMDGE = !this.tabsMDGE;
    this.tabsCompte  = true ;
    this.tabsSys = true
    this.tabspollLoc= true

  }

  showTabsCompte() {
    this.tabsCompte  = !this.tabsCompte ;
    this.tabsMDGE = true ;
    this.tabsSys = true
    this.tabspollLoc= true
  }

  showTabsPollLoc(){
    this.tabsSys = true
    this.tabspollLoc = !this.tabspollLoc
    this.tabsMDGE = true
    this.tabsCompte  = true ;
  }

  showTabsSys() {
    this.tabsSys = !this.tabsSys;
    this.tabspollLoc = true
    this.tabsMDGE = true
    this.tabsCompte  = true ;
  }
}
