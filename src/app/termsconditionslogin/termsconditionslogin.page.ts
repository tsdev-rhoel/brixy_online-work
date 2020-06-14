import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-termsconditionslogin',
  templateUrl: './termsconditionslogin.page.html',
  styleUrls: ['./termsconditionslogin.page.scss'],
})
export class TermsconditionsloginPage implements OnInit {

  constructor(private router: Router) { }

  goBack(){
    this.router.navigate(['choose']);
  }
  ngOnInit() {
  }

}
