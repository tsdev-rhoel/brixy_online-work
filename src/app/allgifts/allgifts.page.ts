import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { SendgiftbronzemodalPage } from '../sendgiftbronzemodal/sendgiftbronzemodal.page';
import { SendgiftsilvermodalPage } from '../sendgiftsilvermodal/sendgiftsilvermodal.page';
import { SendgiftgoldmodalPage } from '../sendgiftgoldmodal/sendgiftgoldmodal.page';
import { SendgiftpopularmodalPage } from '../sendgiftpopularmodal/sendgiftpopularmodal.page';
import {Howl, Howler} from 'howler';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-allgifts',
  templateUrl: './allgifts.page.html',
  styleUrls: ['./allgifts.page.scss'],
})
export class AllgiftsPage implements OnInit {

  player: Howl = null;

  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;

  constructor(private modalController: ModalController,
    private router: Router) { }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

   async sendgift() {
        const modal = await this.modalController.create({
          component: SendgiftbronzemodalPage,
          cssClass: 'sendgiftmodal'
        });
     
        return await modal.present();
      }
  viewlive(){
    this.router.navigate(['viewlive']);
  }

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
     imageaudio2: 'assets/gifaudio/thumbsup.mp3',
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

    silverList:any[]=[
      // {
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
        },
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
      
          // async openGold(gold) {
      
      
          //       const modal = await this.modalController.create({
          //         component: SendgiftgoldmodalPage,
          //         cssClass: 'sendgiftmodal',
          //         componentProps: { gold: gold}
          //       });
        
          //   if (this.player != null) {
          //     this.player.stop();
          //     this.player.unload();
          //     this.player = null;
          // }
        
          //       this.player = new Howl({
          //         src: [gold.imageaudio]
          //       });
              
          //       this.player.play();
          //       Howler.volume(0.5);
          //    
          //       return await modal.present();
          //     }
    
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
              
              // async openPopular(popular) {
          
          
              //       const modal = await this.modalController.create({
              //         component: SendgiftpopularmodalPage,
              //         cssClass: 'sendgiftmodal',
              //         componentProps: { popular: popular}
              //       });
            
              //   if (this.player != null) {
              //     this.player.stop();
              //     this.player.unload();
              //     this.player = null;
              // }
            
              //       this.player = new Howl({
              //         src: [popular.imageaudio]
              //       });
                  
              //       this.player.play();
              //       Howler.volume(0.5);
              //    
              //       return await modal.present();
              //     }

  ngOnInit() {
  }

  closemodal()
  {
    this.modalController.dismiss();
  }

}
