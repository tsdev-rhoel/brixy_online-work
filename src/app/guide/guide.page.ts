import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-guide',
  templateUrl: './guide.page.html',
  styleUrls: ['./guide.page.scss'],
})
export class GuidePage implements OnInit {

  constructor(private router: Router) { }

  toChoose(){
    this.router.navigate(['choose']);
  }

  ngOnInit() {
  }

}
