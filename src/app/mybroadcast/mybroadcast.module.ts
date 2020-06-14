import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MybroadcastPage } from './mybroadcast.page';

const routes: Routes = [
  {
    path: '',
    component: MybroadcastPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MybroadcastPage]
})
export class MybroadcastPageModule {}
