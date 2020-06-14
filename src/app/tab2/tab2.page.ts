import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;

  constructor(private router: Router) { }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  goTab1(){
    this.router.navigate(['tabs']);
  }

  toAccount(){
    this.router.navigate(['myaccount']);
  }

  goVideoTapped()
  {
    this.router.navigate(['viewlive']);
  }

  ngOnInit() {
  }

}
