import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.page.html',
  styleUrls: ['./facebook.page.scss'],
})
export class FacebookPage implements OnInit {

  constructor(private router: Router) { }

  toHomePage(){
    this.router.navigate(['tabs']);
  }

  ngOnInit() {
  }

}
