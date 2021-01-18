import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedsPage } from './feeds.page';

const routes: Routes = [
  {
    path: '',
    component: FeedsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedsPageRoutingModule {}
