import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  
  ImageArray: any = [];
  
  

  constructor(public navCtrl: NavController,
    private router: Router) {


    this.ImageArray = [
      {'image':'assets/icon/ads1.jpg'},
      {'image':'assets/icon/ads2.jpg'},
      {'image':'assets/icon/ads3.jpg'}
    ]

    setTimeout(() => {
      this.router.navigate(['brixyloads']);
    }, 2000);
  }

  toAds(){
    this.router.navigate(['ads']);
  }
  

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
   };

  


   
   


}

