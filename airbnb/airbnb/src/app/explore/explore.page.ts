import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage {

  constructor(
    private navCtrl: NavController
  ) { }

  toProfile() {
    this.navCtrl.navigateForward("profile")
  }

}

 