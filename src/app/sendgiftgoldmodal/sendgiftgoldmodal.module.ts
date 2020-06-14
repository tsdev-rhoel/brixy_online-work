import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SendgiftgoldmodalPage } from './sendgiftgoldmodal.page';

const routes: Routes = [
  {
    path: '',
    component: SendgiftgoldmodalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SendgiftgoldmodalPage]
})
export class SendgiftgoldmodalPageModule {}
