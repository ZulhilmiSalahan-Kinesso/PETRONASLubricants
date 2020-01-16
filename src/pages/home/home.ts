import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { VehicleSelectionPage } from '../vehicle-selection/vehicle-selection';
import { GaragePage } from '../garage/garage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  gotoVehicleType() {
    this.navCtrl.push(VehicleSelectionPage);
  }

  gotoMyGarage() {
    this.navCtrl.push(GaragePage);
  }

}
