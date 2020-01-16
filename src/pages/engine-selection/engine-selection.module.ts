import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EngineSelectionPage } from './engine-selection';

@NgModule({
  declarations: [
    EngineSelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(EngineSelectionPage),
  ],
})
export class EngineSelectionPageModule {}
