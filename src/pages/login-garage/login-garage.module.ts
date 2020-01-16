import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginGaragePage } from './login-garage';

@NgModule({
  declarations: [
    LoginGaragePage,
  ],
  imports: [
    IonicPageModule.forChild(LoginGaragePage),
  ],
})
export class LoginGaragePageModule {}
