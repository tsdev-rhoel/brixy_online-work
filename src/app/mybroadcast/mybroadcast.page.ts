import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mybroadcast',
  templateUrl: './mybroadcast.page.html',
  styleUrls: ['./mybroadcast.page.scss'],
})
export class MybroadcastPage implements OnInit {

  constructor(private router: Router) { }
  myDate: String = new Date().toISOString();

  goBack(){
    this.router.navigate(['myaccount']);
  }

  ngOnInit() {
  }

}
