import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SendgiftbronzemodalPage } from './sendgiftbronzemodal.page';

const routes: Routes = [
  {
    path: '',
    component: SendgiftbronzemodalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SendgiftbronzemodalPage]
})
export class SendgiftbronzemodalPageModule {}
