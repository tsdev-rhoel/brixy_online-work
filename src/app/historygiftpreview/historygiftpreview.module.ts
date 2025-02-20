import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistorygiftpreviewPage } from './historygiftpreview.page';

const routes: Routes = [
  {
    path: '',
    component: HistorygiftpreviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HistorygiftpreviewPage]
})
export class HistorygiftpreviewPageModule {}
