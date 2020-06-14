import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReadytogolivePage } from './readytogolive.page';

const routes: Routes = [
  {
    path: '',
    component: ReadytogolivePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReadytogolivePage]
})
export class ReadytogolivePageModule {}
