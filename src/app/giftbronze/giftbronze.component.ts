import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SendgiftbronzemodalPage } from '../sendgiftbronzemodal/sendgiftbronzemodal.page';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-giftbronze',
  templateUrl: './giftbronze.component.html',
  styleUrls: ['./giftbronze.component.scss'],
})
export class GiftbronzeComponent implements OnInit {

  
  player: Howl = null;
  constructor(public modalController: ModalController) { }

  bronzeList:any[]=[
    {
    name:'High-Five ',
   image:'assets/gif/highfive.gif',
   imagegif: 'assets/gif/highfive.gif',
   imageaudio: 'assets/gifaudio/highfive.mp3',
   imageaudio2: '',
   price:"10"
    },
    {
    name:'Thumbs-up',
   image:'assets/gif/thumbsup.gif',
   imagegif: 'assets/gif/thumbsup.gif',
   imageaudio: 'assets/gifaudio/thumbsup.mp3',
   imageaudio2: '',
   price:"10"
    },
    {
    name:'Chocolate Bar (With bite)',
   image:'assets/gif/choco.gif',
   imagegif: 'assets/gif/choco.gif',
   imageaudio: 'assets/gifaudio/choco.wav',
   imageaudio2: '',
   price:"30"
    },
    {
    name:'Big Lips Kiss',
   image:'assets/gif/lips.gif',
   imagegif: 'assets/gif/lips.gif',
   imageaudio: 'assets/gifaudio/lips.mp3',
   imageaudio2: '',
   price:"50"
    },
    {
    name:'Puppy Dog',
   image:'assets/gif/puppy.gif',
   imagegif: 'assets/gif/puppy.gif',
   imageaudio: 'assets/gifaudio/puppy.wav',
   imageaudio2: '',
   price:"50"
    },
  //   {
  //     // notyet
  //   name:'Fireworks',
  //  image:'assets/gif/thumbsup.gif',
  //  imagegif: 'assets/gif/thumbsup.gif',
  //  imageaudio: 'assets/gifaudio/lips.mp3',
  //  imageaudio2: '',
  //  price:"100"
  //   },
    {
    name:'Panda Bear Stuff Toy',
   image:'assets/gif/panda_gif.gif',
   imagegif: 'assets/gif/panda_gif.gif',
   imageaudio: 'assets/gifaudio/panda.wav',
   imageaudio2: '',
   price:"250"
    },
    {
    name:'Boquet of Roses',
   image:'assets/gif/boquet.gif',
   imagegif: 'assets/gif/boquet.gif',
   imageaudio: 'assets/gifaudio/boquet.wav',
   imageaudio2: '',
   price:"500"
    },
    {
    name:'Rainbow',
   image:'assets/gif/rainbow.gif',
   imagegif: 'assets/gif/rainbow.gif',
   imageaudio: 'assets/gifaudio/rainbow.mp3',
   imageaudio2: '',
   price:"1000"
    },
  //  {
  //    //not yet
  //   name:'Brixy Butterfly Basic Bronze',
  //  image:'assets/gif/rainbow.gif',
  //  imagegif: 'assets/gif/rainbow.gif',
  //  imageaudio: 'assets/gifaudio/lips.mp3',
  //  imageaudio2: '',
  //  price:"5000"
  //  }
]
   

   

  async openBronze(bronze) {

        const modal = await this.modalController.create({
          component: SendgiftbronzemodalPage,
          cssClass: 'sendgiftmodal',
          componentProps: { bronze: bronze}
        });

    if (this.player != null) {
      this.player.stop();
      this.player.unload();
      this.player = null;
  }

        this.player = new Howl({
          src: [bronze.imageaudio],
          onend: function() {
              this.player = new Howl({
                    src: [bronze.imageaudio2]
                  });
                  this.player.play();
                }
        });
      
        this.player.play();
        Howler.volume(0.5);
     
        return await modal.present();
   
      }



  ngOnInit() {}

}
