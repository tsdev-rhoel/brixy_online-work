import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-historypreview',
  templateUrl: './historypreview.page.html',
  styleUrls: ['./historypreview.page.scss'],
})
export class HistorypreviewPage implements OnInit {
  transaction:any

  constructor(navParams: NavParams,public modalCtrl: ModalController) {
  
  this.transaction=navParams.get('transaction')
  
  
  }
  
    closeModal()
    {
      this.modalCtrl.dismiss();
     
    }
  
    ngOnInit() {
      
    }

  
  }
