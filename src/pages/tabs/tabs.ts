import { Component } from '@angular/core';

import { Profile } from '../profile/profile';
import { History } from '../history/history';
import { Listen } from '../listen/listen';
import { ContactPage } from '../contact/contact';
import { More } from '../more/more';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Profile;
  tab2Root = History;
  tab3Root = Listen;
  tab4Root = ContactPage;
  tab5Root = More;
  

  constructor() {
  	console.log("here 2");

  }
}
