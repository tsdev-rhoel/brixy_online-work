import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-termsconditions',
  templateUrl: './termsconditions.page.html',
  styleUrls: ['./termsconditions.page.scss'],
})
export class TermsconditionsPage implements OnInit {

  constructor(private router: Router) { }

  goLive(){
    this.router.navigate(['readytogolive']);
  }
  goBack(){
    this.router.navigate(['tab3']);
  }

  ngOnInit() {
  }

}
