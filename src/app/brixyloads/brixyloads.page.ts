import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brixyloads',
  templateUrl: './brixyloads.page.html',
  styleUrls: ['./brixyloads.page.scss'],
})
export class BrixyloadsPage implements OnInit {

  constructor(private router: Router) { 

    setTimeout(() => {
      this.router.navigate(['ads']);
    }, 1000);
  }

  ngOnInit() {
  }

}
