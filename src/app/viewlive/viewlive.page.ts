import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AllgiftsPage } from '../allgifts/allgifts.page';
import { LiveprofilePage } from '../liveprofile/liveprofile.page';

@Component({
  selector: 'app-viewlive',
  templateUrl: './viewlive.page.html',
  styleUrls: ['./viewlive.page.scss'],
})
export class ViewlivePage implements OnInit {

  constructor(
    private router: Router,
    public modalController: ModalController
    ) { }

  ngOnInit() {
  }

  openGifts(){
    this.router.navigate(['allgifts']);
  }
  goTab5(){
    this.router.navigate(['tabs/tab5']);
  }
  goHome(){
      this.router.navigate(['tabs']);
    
    }
  goStore(){
      this.router.navigate(['tab4']);
    
    }
  
  async openAllgifts() {

        const modal = await this.modalController.create({
          component: AllgiftsPage,
          cssClass: 'allgiftsmodalstyle'
        });
        return await modal.present();
  }

  async openliveprofile() {

        const modal = await this.modalController.create({
          component: LiveprofilePage,
          cssClass: 'liveprofilemodalstyle'
        });

     
        return await modal.present();
  }
  
  
}
