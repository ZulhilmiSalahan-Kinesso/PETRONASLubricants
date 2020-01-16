import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LubricantsPage } from '../lubricants/lubricants';
import { SuggestionProvider } from '../../providers/suggestion/suggestion';

/**
 * Generated class for the CcSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cc-selection',
  templateUrl: 'cc-selection.html',
})
export class CcSelectionPage {
  
  engineCC : any;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public selection: SuggestionProvider) {
      switch(this.selection.typeId){
        case 0:
          this.engineCC = ["Above 1900 cc", "Between 1300 to 1900cc", "Below 1300cc"];
          break;
        case 1:
          this.engineCC = ["Above 1900 cc", "Between 1300 to 1900cc", "Below 1300cc"];
          break;
        case 2:
          if(this.selection.engineId === 0)
          {
            this.engineCC = ["Sportbike", "Easyrider", "Old Motorcycle", "Less than 200cc", "Scooter"];
          }
          else{
            this.engineCC = ["Normal Usage", "Harsh Usage"];
          }
          break;
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CcSelectionPage');
  }

  gotoSuggestion(id){
    this.selection.getCCSelection(id);
    this.navCtrl.push(LubricantsPage);
  }
}
