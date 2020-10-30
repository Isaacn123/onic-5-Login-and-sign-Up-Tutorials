import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginscreenPage } from './loginscreen.page';

const routes: Routes = [
  {
    path: '',
    component: LoginscreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginscreenPageRoutingModule {}
