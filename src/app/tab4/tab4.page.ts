import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { GiftbronzeComponent } from './../giftbronze/giftbronze.component';
import { GiftgoldComponent } from './../giftgold/giftgold.component';
import { GiftsilverComponent } from './../giftsilver/giftsilver.component';
import { GiftpopularComponent } from './../giftpopular/giftpopular.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;

  constructor(private router: Router,private popoverCtrl: PopoverController) { }

  goWallet(){
    this.router.navigate(['wallet']);
  }

  toAccount(){
    this.router.navigate(['myaccount']);
  }
  
  goBack(){
    window.history.back();
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  async bronze(ev: any) {
    const popover = await this.popoverCtrl.create({
        component: GiftbronzeComponent,
        event: ev,
        animated: true,
        showBackdrop: true
    });
    return await popover.present();
}
async silver(ev: any) {
  const popover = await this.popoverCtrl.create({
      component: GiftsilverComponent,
      event: ev,
      animated: true,
      showBackdrop: true
  });
  return await popover.present();
}
async gold(ev: any) {
  const popover = await this.popoverCtrl.create({
      component: GiftgoldComponent,
      event: ev,
      animated: true,
      showBackdrop: true
  });
  return await popover.present();
}
async popular(ev: any) {
  const popover = await this.popoverCtrl.create({
      component: GiftpopularComponent,
      event: ev,
      animated: true,
      showBackdrop: true
  });
  return await popover.present();
}


  ngOnInit() {
  }


}
