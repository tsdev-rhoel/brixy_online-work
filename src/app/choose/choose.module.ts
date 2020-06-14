import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChoosePage } from './choose.page';
import { FirebaseUIModule } from 'firebaseui-angular';

const routes: Routes = [
  {
    path: '',
    component: ChoosePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirebaseUIModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChoosePage]
})
export class ChoosePageModule {}
