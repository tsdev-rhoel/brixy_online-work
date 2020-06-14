import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-sendgiftbronzemodal',
  templateUrl: './sendgiftbronzemodal.page.html',
  styleUrls: ['./sendgiftbronzemodal.page.scss'],
})
export class SendgiftbronzemodalPage implements OnInit {
  bronze:any
  player: Howl = null;

  constructor(navParams: NavParams,public modalCtrl: ModalController) {
  
  this.bronze=navParams.get('bronze')
  
  
  }
  
    closeModal()
    {
      this.modalCtrl.dismiss();
      Howler.volume(0.0);
    }
  
    ngOnInit() {
      
    }
    ionViewWillLeave(){
      Howler.volume(0.0);
    }
  
  }