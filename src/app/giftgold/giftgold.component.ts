import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SendgiftgoldmodalPage } from '../sendgiftgoldmodal/sendgiftgoldmodal.page'
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-giftgold',
  templateUrl: './giftgold.component.html',
  styleUrls: ['./giftgold.component.scss'],
})
export class GiftgoldComponent implements OnInit {

  player: Howl = null;

  constructor(private modalController: ModalController) { }

   goldList:any[]=[
        {
        name:'Invited to dance ball',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"2700"
        },
        {
        name:'Golden Microphone',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"4999"
        },
        {
        name:'Fine Dining Dinner Date',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"5500"
        },
        {
        name:'Black Limosuine',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"14000"
        },
        {
        name:'White Castle',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"19999"
        },
        {
        name:'Private Jet',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"28000"
        },
        {
        name:'Cruiseliner Ship',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"38000"
        },
        {
        name:'Brixy Golden Butterfly',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"570000"
        },
        {
        name:'Grand Mansion',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"4999"
        },
        {
        name:'Galaxy Milky Way',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"6000"
        },
        {
        name:'Space Ship UFO',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"12000"
        },
        {
        name:'Sportscar Lamborghini',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"15000"
        },
        {
        name:'Planet Earth World Peace',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"56000"
        },
        {
        name:'Exclusive Resort Vacation',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"114000"
        },
       {
        name:'Golden Castle',
       image:'assets/gif/lips.gif',
       imagegif: 'assets/gif/lips.gif',
       imageaudio: 'assets/gifaudio/lips.mp3',
       price:"285000"
       }]

    async openGold(gold) {


          const modal = await this.modalController.create({
            component: SendgiftgoldmodalPage,
            cssClass: 'sendgiftmodal',
            componentProps: { gold: gold}
          });
  
      if (this.player != null) {
        this.player.stop();
        this.player.unload();
        this.player = null;
    }
  
          this.player = new Howl({
            src: [gold.imageaudio]
          });
        
          this.player.play();
          Howler.volume(0.5);
       
           return await modal.present();
        }
  
  
    ngOnInit() {}
  
  }