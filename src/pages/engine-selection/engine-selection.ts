import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CcSelectionPage } from '../cc-selection/cc-selection';
import { SuggestionProvider } from '../../providers/suggestion/suggestion';

/**
 * Generated class for the EngineSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-engine-selection',
  templateUrl: 'engine-selection.html',
})
export class EngineSelectionPage {
  enginesMotor : any;
  engines : any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public selection : SuggestionProvider) {
    switch(this.selection.typeId){
      case 0 :
        this.engines = ["Below 5 Years", "Above 5 Years"];
        break;
      case 1 : 
        this.engines = ["Below 5 Years", "Above 5 Years"];
        break;
      case 2 :
        this.engines = ["4 Stroke", "2 Stroke"]
        break;
    }
      
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EngineSelectionPage');
  }

  gotoCCSelection(id){
    this.selection.getEngineSelection(id);
    this.navCtrl.push(CcSelectionPage);
  }
}
