import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-sendgiftgoldmodal',
  templateUrl: './sendgiftgoldmodal.page.html',
  styleUrls: ['./sendgiftgoldmodal.page.scss'],
})
export class SendgiftgoldmodalPage implements OnInit {
  gold:any
  player: Howl = null;

  constructor(navParams: NavParams,public modalCtrl: ModalController) {
    this.gold=navParams.get('gold')
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

