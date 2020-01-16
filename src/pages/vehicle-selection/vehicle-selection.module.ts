import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleSelectionPage } from './vehicle-selection';

@NgModule({
  declarations: [
    VehicleSelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleSelectionPage),
  ],
})
export class VehicleSelectionPageModule {}
