import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadimagePage } from './uploadimage.page';

const routes: Routes = [
  {
    path: '',
    component: UploadimagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadimagePageRoutingModule {}
