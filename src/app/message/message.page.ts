import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  constructor(private router: Router) { }

  goTab5(){
    this.router.navigate(['tabs/tab5']);
  }

  ngOnInit() {
  }

}
