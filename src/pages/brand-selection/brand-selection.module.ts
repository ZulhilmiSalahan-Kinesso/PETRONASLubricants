import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrandSelectionPage } from './brand-selection';

@NgModule({
  declarations: [
    BrandSelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(BrandSelectionPage),
  ],
})
export class BrandSelectionPageModule {}
