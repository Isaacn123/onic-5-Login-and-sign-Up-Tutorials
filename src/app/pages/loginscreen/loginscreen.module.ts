import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginscreenPageRoutingModule } from './loginscreen-routing.module';

import { LoginscreenPage } from './loginscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginscreenPageRoutingModule
  ],
  declarations: [LoginscreenPage]
})
export class LoginscreenPageModule {}
