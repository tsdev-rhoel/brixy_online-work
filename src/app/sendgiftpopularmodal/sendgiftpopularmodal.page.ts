import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-sendgiftpopularmodal',
  templateUrl: './sendgiftpopularmodal.page.html',
  styleUrls: ['./sendgiftpopularmodal.page.scss'],
})
export class SendgiftpopularmodalPage implements OnInit {
  popular:any
  player: Howl = null;

  constructor(navParams: NavParams,public modalCtrl: ModalController) {
    this.popular=navParams.get('popular')
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