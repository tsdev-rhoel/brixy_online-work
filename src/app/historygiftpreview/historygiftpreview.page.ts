import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-historygiftpreview',
  templateUrl: './historygiftpreview.page.html',
  styleUrls: ['./historygiftpreview.page.scss'],
})
export class HistorygiftpreviewPage implements OnInit {
  gift:any
  player: Howl = null;

  constructor(navParams: NavParams,public modalCtrl: ModalController) {
  
  this.gift=navParams.get('gift')
  
  
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