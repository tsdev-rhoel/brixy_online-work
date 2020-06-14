import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { HistorypreviewPage } from '../historypreview/historypreview.page';
import { HistorygiftpreviewPage } from '../historygiftpreview/historygiftpreview.page';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;
  player: Howl = null;
  constructor(private router: Router,public modalController: ModalController) { }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  goBack(){
    // this.router.navigate(['myaccount']);
    window.history.back();
  }
  goStore(){
     this.router.navigate(['tabs/tab4']);
  }

  transactionList:any[]=[
    {
   image:'assets/icon/imgcoin.png',
   dateandtime: '10/11/2019 1:00 PM',
   text: 'You have purchased 100 coins ...'
    },
     {
   image:'assets/icon/imgcoin.png',
   dateandtime: '10/12/2019 2:00 PM',
   text: 'You have cashout 500 coins ...'
    },
     {
   image:'assets/icon/imgcoin.png',
   dateandtime: '10/13/2019 3:00 PM',
   text: 'You have purchased 1000 coins ...'
    },
     {
   image:'assets/icon/imgcoin.png',
   dateandtime: '10/14/2019 4:00 PM',
   text: 'YYou have purchased 1500 coins ...'
    },
     {
   image:'assets/icon/imgcoin.png',
   dateandtime: '10/15/2019 5:00 PM',
   text: 'You have cashout 2000 coins ...'
    },

]

giftList:any[]=[
  {
 image:'assets/gif/panda_gif.gif',
 dateandtime: '10/11/2019 1:50 PM',
 imageaudio: 'assets/gifaudio/panda.wav',
 imageaudio2: '',
 text: 'You have purchased panda bear at '
  },
   {
 image:'assets/gif/hug.gif',
 dateandtime: '10/11/2019 3:30 PM',
 imageaudio: 'assets/gifaudio/hug.wav',
 imageaudio2: '',
 text: 'You received hugs from User '
  },
   {
 image:'assets/gif/boquet.gif',
 dateandtime: '10/11/2019 5:30 PM',
 imageaudio: 'assets/gifaudio/boquet.wav',
 imageaudio2: '',
 text: 'You sent boquet of roses to User '
  },
   {
 image:'assets/gif/choco.gif',
 dateandtime: '09/21/2019 9:30 AM',
 imageaudio: 'assets/gifaudio/choco.wav',
 imageaudio2: '',
 text: 'You received chocolate bar from U'
  },
   {
 image:'assets/gif/puppy.gif',
 dateandtime: '02/03/2020 1:50 PM',
 imageaudio: 'assets/gifaudio/puppy.wav',
 imageaudio2: '',
 text: 'You have purchased puppy dog at '
  },

]

async openTransaction(transaction) {

      const modal = await this.modalController.create({
        component: HistorypreviewPage,
        cssClass: 'sendgiftmodal',
        componentProps: { transaction: transaction}
      });
      return await modal.present();
    }

async openGift(gift) {

      const modal = await this.modalController.create({
        component: HistorygiftpreviewPage,
        cssClass: 'sendgiftmodal',
        componentProps: { gift: gift}
      });

  if (this.player != null) {
    this.player.stop();
    this.player.unload();
    this.player = null;
}

this.player = new Howl({
  src: [gift.imageaudio],
  onend: function() {
      this.player = new Howl({
            src: [gift.imageaudio2]
          });
          this.player.play();
        }
});

this.player.play();
Howler.volume(0.5);
      return await modal.present();
    }

  ngOnInit() {
  }

}
