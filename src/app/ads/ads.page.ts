import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.page.html',
  styleUrls: ['./ads.page.scss'],
})
export class AdsPage implements OnInit {

  ImageArray: any = [];
  
  

  constructor(public navCtrl: NavController,
    private router: Router) {


    this.ImageArray = [
      {'image':'assets/ads/Brixy_Ad_Panel_1.jpg'},
      {'image':'assets/ads/Brixy_Ad_Panel_2.jpg'},
      {'image':'assets/ads/Brixy_Ad_Panel_3.jpg'}
    ]

  }

  goChoose(){
    this.router.navigate(['choose']);
  }

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
   };

  ngOnInit() {
  }

}
