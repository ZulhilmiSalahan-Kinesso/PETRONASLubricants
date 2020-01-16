import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrandSelectionPage } from '../brand-selection/brand-selection';
import { SuggestionProvider } from '../../providers/suggestion/suggestion';
/**
 * Generated class for the VehicleSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehicle-selection',
  templateUrl: 'vehicle-selection.html',
})
export class VehicleSelectionPage {

  vehicleTypes : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public selection: SuggestionProvider) {
    this.vehicleTypes = ["PASSENGER CAR MOTOR OIL", "4x4 MOTOR OIL", "MOTORCYCLE MOTOR OIL"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehicleSelectionPage');
  }
  
  gotoBrand(id){
    this.selection.getTypeSelection(id);
    this.navCtrl.push(BrandSelectionPage);
  }

}
