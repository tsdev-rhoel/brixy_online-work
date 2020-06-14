import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SendgiftsilvermodalPage } from './sendgiftsilvermodal.page';

const routes: Routes = [
  {
    path: '',
    component: SendgiftsilvermodalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SendgiftsilvermodalPage]
})
export class SendgiftsilvermodalPageModule {}
