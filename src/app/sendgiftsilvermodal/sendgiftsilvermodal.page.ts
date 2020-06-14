import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {Howl, Howler} from 'howler';



@Component({
  selector: 'app-sendgiftsilvermodal',
  templateUrl: './sendgiftsilvermodal.page.html',
  styleUrls: ['./sendgiftsilvermodal.page.scss'],
})
export class SendgiftsilvermodalPage implements OnInit {
  silver:any
  player: Howl = null;

  constructor(navParams: NavParams,public modalCtrl: ModalController) {
    this.silver=navParams.get('silver')
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
