import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LubricantsPage } from './lubricants';

@NgModule({
  declarations: [
    LubricantsPage,
  ],
  imports: [
    IonicPageModule.forChild(LubricantsPage),
  ],
})
export class LubricantsPageModule {}
