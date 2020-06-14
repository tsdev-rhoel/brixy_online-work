import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterPage } from '../register/register.page';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { PostProvider } from '../../providers/credential-provider';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(
    private router: Router,
    private modalController: ModalController,
    private storage: Storage,
    private postPvdr: PostProvider,
    ) {}

    toAccount(){
      this.router.navigate(['myaccount']);
    }
    goVideo(){
      this.router.navigate(['viewlive']);
    }
    goHome(){
      this.router.navigate(['tabs']);
    }

    async openRegistermodal() {
      const modal = await this.modalController.create({
        component: RegisterPage,
        cssClass: 'registermodalstyle'
      });
      return await modal.present();
    }
    
    async check_user_exists(){
      this.storage.get('login_used').then((login) => {
        console.log("log used is: "+login);
        if(login == "facebook" || login == "google") {
          this.storage.get('email').then((email) => {
            if(email){
                let body = {
                  action : 'check_user_exists',
                  email : email,
                  login_used : login
                };
                console.log("email is: "+email);
                
                this.postPvdr.postData(body, 'credentials-api.php').subscribe(data => {
                  if(data.success){
                    this.openRegistermodal();
                  }
                });
            } else {
              console.log("Email does not exist: "+email);
              
            }
          });
        } else {
          this.storage.get('mobile_num').then((mobile_num) => {
            if(login == "mobile"){
              
              let body = {
                action : "check_user_mobile",
                mobile_num : mobile_num,
              };
              this.postPvdr.postData(body, 'credentials-api.php').subscribe(data => {
                if(data.success){
                  this.openRegistermodal();
                }
              });

            } else {
              //this.openRegistermodal();
              console.log("Login used does not exist: "+login);
            }
          });
        }
      });
    }
  

  ngOnInit() {
    this.check_user_exists();
  }
}
