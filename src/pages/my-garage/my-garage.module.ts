import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyGaragePage } from './my-garage';

@NgModule({
  declarations: [
    MyGaragePage,
  ],
  imports: [
    IonicPageModule.forChild(MyGaragePage),
  ],
})
export class MyGaragePageModule {}
