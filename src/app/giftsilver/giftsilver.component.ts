import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SendgiftsilvermodalPage } from '../sendgiftsilvermodal/sendgiftsilvermodal.page'
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-giftsilver',
  templateUrl: './giftsilver.component.html',
  styleUrls: ['./giftsilver.component.scss'],
})
export class GiftsilverComponent implements OnInit {

  player: Howl = null;

  constructor(private modalController: ModalController) { }

  silverList:any[]=[
  //   {
  //   name:'Bottle of Perfume',
  //  image:'assets/gif/lips.gif',
  //  imagegif: 'assets/gif/lips.gif',
  //  imageaudio: 'assets/gifaudio/lips.mp3',
  //  price:"100"
  //   },
    {
    name:'Hugs',
   image:'assets/gif/hug.gif',
   imagegif: 'assets/gif/hug.gif',
   imageaudio: 'assets/gifaudio/hug.wav',
   price:"100"
    },
    {
    name:'Birthday Cake (With candles)',
   image:'assets/gif/cak.gif',
   imagegif: 'assets/gif/cak.gif',
   imageaudio: 'assets/gifaudio/birthday.mp3',
   price:"199"
    }
  //   {
  //   name:'Cash Rain (Raining Cash)',
  //  image:'assets/gif/lips.gif',
  //  imagegif: 'assets/gif/lips.gif',
  //  imageaudio: 'assets/gifaudio/lips.mp3',
  //  price:"299"
  //   },
  //   {
  //   name:'Sunrise',
  //  image:'assets/gif/lips.gif',
  //  imagegif: 'assets/gif/lips.gif',
  //  imageaudio: 'assets/gifaudio/lips.mp3',
  //  price:"500"
  //   },
  //   {
  //   name:'Shooting Star',
  //  image:'assets/gif/lips.gif',
  //  imagegif: 'assets/gif/lips.gif',
  //  imageaudio: 'assets/gifaudio/lips.mp3',
  //  price:"500"
  //   },
  //   {
  //   name:'Gift Box (1) - Proposal Wedding Ring',
  //  image:'assets/gif/lips.gif',
  //  imagegif: 'assets/gif/lips.gif',
  //  imageaudio: 'assets/gifaudio/lips.mp3',
  //  price:"799"
  //   },
  //   {
  //   name:'Pink Volkswagon Beetle (Car)',
  //  image:'assets/gif/lips.gif',
  //  imagegif: 'assets/gif/lips.gif',
  //  imageaudio: 'assets/gifaudio/lips.mp3',
  //  price:"1000"
  //   },
  //   {
  //   name:'Sports Car (Mustang/Muscle Car)',
  //  image:'assets/gif/lips.gif',
  //  imagegif: 'assets/gif/lips.gif',
  //  imageaudio: 'assets/gifaudio/lips.mp3',
  //  price:"1999"
  //   },
  //  {
  //   name:'Brixy Butterfly Silver',
  //  image:'assets/gif/lips.gif',
  //  imagegif: 'assets/gif/lips.gif',
  //  imageaudio: 'assets/gifaudio/lips.mp3',
  //  price:"10000"
  //  }
]
   

   

  async openSilver(silver) {


        const modal = await this.modalController.create({
          component: SendgiftsilvermodalPage,
          cssClass: 'sendgiftmodal',
          componentProps: { silver: silver}
        });

    if (this.player != null) {
      this.player.stop();
      this.player.unload();
      this.player = null;
  }

        this.player = new Howl({
          src: [silver.imageaudio]
        });
      
        this.player.play();
        Howler.volume(0.5);
     
        return await modal.present();
      }

    


  ngOnInit() {}

}
