import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EngineSelectionPage } from '../engine-selection/engine-selection';
import { SuggestionProvider } from '../../providers/suggestion/suggestion';
/**
 * Generated class for the BrandSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brand-selection',
  templateUrl: 'brand-selection.html',
})
export class BrandSelectionPage {
  
  brands : any;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public selection : SuggestionProvider) {
    
    switch(this.selection.typeId){
      case 0 : 
        this.brands = ["ALFA ROMEO", "AUDI", "BMW", "CHERRY", "CHEVROLET", "CITREON", "FERRARI", "HONDA", "HYUNDAI", "JAGUAR", "KIA", "LEXUS", "MAZDA", "MERCEDES", "MITSUBISHI", "NAZA", "NISSAN", "PERODUA", "PEUGEOT", "PROTON", "RENAULT", "SAAB", "SUBARU", "SUZUKI", "TOYOTA", "VOLVO", "WOLKSWAGEN"];
        break;
      case 1 : 
        this.brands = ["FORD", "ISUZU", "LAND ROVER", "MITSUBISHI", "NISSAN", "SSANGYONG", "TOYOTA"];
        break;
      case 2 : 
        this.brands = ["APRILIA", "BMW", "BUELL", "CAGIVA", "COMEL", "DEMAK", "DUCATI", "HARLEY DAVIDSON", "HONDA", "KAWASAKI", "LAVERDA", "MODENAS", "MOTO GUZZI", "NAZA", "SUZUKI", "TITAN", "TRIUMPH", "VESPA", "YAMAHA"];
        break;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrandSelectionPage');
  }

  gotoEngineSelection(id){
    this.selection.getBrandSelection(id);
    this.navCtrl.push(EngineSelectionPage);
  }

}
