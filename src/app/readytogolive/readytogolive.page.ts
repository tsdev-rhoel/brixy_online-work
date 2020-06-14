import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-readytogolive',
  templateUrl: './readytogolive.page.html',
  styleUrls: ['./readytogolive.page.scss'],
})
export class ReadytogolivePage implements OnInit {

  constructor(private router: Router) { }

  goBack(){
    this.router.navigate(['termsconditions']);
  }
  goLive(){
    this.router.navigate(['viewlive']);
  }

  ngOnInit() {
  }

}
