import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TermsconditionsloginPage } from './termsconditionslogin.page';

const routes: Routes = [
  {
    path: '',
    component: TermsconditionsloginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TermsconditionsloginPage]
})
export class TermsconditionsloginPageModule {}
