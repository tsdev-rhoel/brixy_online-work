import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/credential-provider';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  login_used : string;
  email : string;
  fname : string;
  mobile_num : string;
  inpt_fname : string;
  inpt_lname : string;
  inpt_nickname : string;
  inpt_age : string;
  inpt_gender : string;
  inpt_city : string;
  inpt_country : string;
  inpt_email : string;
  inpt_mobile_num : string;

  constructor(
    private storage: Storage,
    private toastController: ToastController,
    private postPvdr: PostProvider,
    private modalController: ModalController,
    ) { }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Congratulations. You are now registered.',
      duration: 3000
    });
    toast.present();
  }
  async presentToastLack() {
    const toast = await this.toastController.create({
      message: 'Please fill in all fields.',
      duration: 3000
    });
    toast.present();
  }

  ngOnInit() {
    this.pre_register();
  }

  pre_register(){
    this.storage.get('login_used').then((val) => {
      this.login_used = val;
    });
    this.storage.get('email').then((val) => {
      this.email = val;
    });
    this.storage.get('fname').then((val) => {
      this.fname = val;
    });
    this.storage.get('mobile_num').then((val) => {
      this.mobile_num = val;
    });
  }

  register(){
    if(this.inpt_fname !== undefined && this.inpt_lname !== undefined && this.inpt_nickname !== undefined && this.inpt_age !== undefined && this.inpt_gender !== undefined && this.inpt_city !== undefined && this.inpt_country !== undefined && this.inpt_email !== undefined && this.inpt_mobile_num !== undefined){
      if(this.login_used == "mobile"){
        console.log("email: "+this.inpt_email)
          let body = {
            action : "register_mobile",
            fname : this.inpt_fname,
            lname : this.inpt_lname,
            nickname : this.inpt_nickname,
            age : this.inpt_age,
            gender : this.inpt_gender,
            city : this.inpt_city,
            country : this.inpt_country,
            email : this.inpt_email,
            mobile_num :this.inpt_mobile_num
          };
          this.postPvdr.postData(body, 'credentials-api.php').subscribe(data => {
            if(data.success){
              this.presentToast();
              this.modalController.dismiss();
            }
          });
       

      } else {
          let body = {
            action : "register",
            login_used : this.login_used,
            fname : this.inpt_fname,
            lname : this.inpt_lname,
            nickname : this.inpt_nickname,
            age : this.inpt_age,
            gender : this.inpt_gender,
            city : this.inpt_city,
            country : this.inpt_country,
            email : this.inpt_email,
            mobile_num :this.inpt_mobile_num
          };
          this.postPvdr.postData(body, 'credentials-api.php').subscribe(data => {
            if(data.success){
              this.presentToast();
              this.modalController.dismiss();
            }
          });
      }
    } else{
      this.presentToastLack();
    }
  }
  cancel(){
    this.modalController.dismiss();
  }
}
