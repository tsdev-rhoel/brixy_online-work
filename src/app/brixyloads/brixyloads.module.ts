import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BrixyloadsPage } from './brixyloads.page';

const routes: Routes = [
  {
    path: '',
    component: BrixyloadsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BrixyloadsPage]
})
export class BrixyloadsPageModule {}
