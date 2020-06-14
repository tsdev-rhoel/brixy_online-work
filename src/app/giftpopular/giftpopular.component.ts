import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SendgiftpopularmodalPage } from '../sendgiftpopularmodal/sendgiftpopularmodal.page'
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-giftpopular',
  templateUrl: './giftpopular.component.html',
  styleUrls: ['./giftpopular.component.scss'],
})
export class GiftpopularComponent implements OnInit {

  player: Howl = null;

  constructor(private modalController: ModalController) { }

   popularList:any[]=[
        {
        name:'Tsinelas',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"10"
        },
        {
        name:'Sampaguita',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"10"
        },
        {
        name:'Sagot Gulaman',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"20"
        },
        {
        name:'Street Foods (Kwek-kwek, Fishball, Isaw)',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"100"
        },
        {
        name:'Barong Tagalog ',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"100"
        },
        {
        name:'Kalabaw',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"150"
        },
        {
        name:'Lechon',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"200"
        },
        {
        name:'Kalesa',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"250"
        },
        {
        name:'Tricycle',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"300"
        },
       {
        name:'Jeepney',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"500"
       }]
    
    async openPopular(popular) {


          const modal = await this.modalController.create({
            component: SendgiftpopularmodalPage,
            cssClass: 'sendgiftmodal',
            componentProps: { popular: popular}
          });
  
      if (this.player != null) {
        this.player.stop();
        this.player.unload();
        this.player = null;
    }
  
          this.player = new Howl({
            src: [popular.imageaudio]
          });
        
          this.player.play();
          Howler.volume(0.5);
       
          return await modal.present();
        }
  
  
    ngOnInit() {}
  
  }
