import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadimagePageRoutingModule } from './uploadimage-routing.module';

import { UploadimagePage } from './uploadimage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadimagePageRoutingModule
  ],
  declarations: [UploadimagePage]
})
export class UploadimagePageModule {}
