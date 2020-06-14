import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistorypreviewPage } from './historypreview.page';

const routes: Routes = [
  {
    path: '',
    component: HistorypreviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HistorypreviewPage]
})
export class HistorypreviewPageModule {}
