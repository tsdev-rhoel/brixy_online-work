import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-liveprofile',
  templateUrl: './liveprofile.page.html',
  styleUrls: ['./liveprofile.page.scss'],
})
export class LiveprofilePage implements OnInit {

  constructor(private router: Router,public modalController: ModalController) { }

  ngOnInit() {
  }

  goBack(){
    this.modalController.dismiss();
  }

}
