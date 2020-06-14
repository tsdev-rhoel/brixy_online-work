import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController,Platform,AlertController } from '@ionic/angular';
import { PostProvider } from '../../providers/credential-provider';
import { SmsProvider } from '../../providers/sms-provider';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-mobilee',
  templateUrl: './mobilee.page.html',
  styleUrls: ['./mobilee.page.scss'],
})
export class MobileePage implements OnInit {
  inpt_mobile : string;
  inpt_code : string;
  inpt_country : string;
  c_bool = 0;
  complete_mobile : string;
  num = Math.floor(Math.random() * 1000000) + 7;
  constructor(
    private router: Router,
    public alertCtrl: AlertController,
    public toastController: ToastController,
    private smsPvdr: SmsProvider,
    public navCtrl:NavController,
    private postPvdr: PostProvider,
    private storage: Storage,
    ) { }

  toHomePage(){
    this.router.navigate(['tabs']);
  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
    message: 'Please enter your mobile number with selected country code.',
    subHeader: 'Required.',
    buttons: ['DISMISS']
   });
   await alert.present(); 
}

async presentAlertSent() {
  const alert = await this.alertCtrl.create({
  message: 'Please enter the code you recieved.',
  subHeader: 'Message Sent.',
  buttons: ['OK']
 });
 await alert.present(); 
}

async presentAlertNotSent() {
  const alert = await this.alertCtrl.create({
  message: 'Please check your internet connection.',
  subHeader: 'Message Not Sent.',
  buttons: ['DISMISS']
 });
 await alert.present(); 
}

async presentAlertError() {
  const alert = await this.alertCtrl.create({
  message: 'Invalid code entered.',
  subHeader: 'Warning.',
  buttons: ['Dismiss']
 });
 await alert.present(); 
}

async presentToast() {
  const toast = await this.toastController.create({
    message: 'Welcome to Brixy Live!',
    duration: 3000
  });
  toast.present();
}

async presentAlertInvalidCountry() {
  const alert = await this.alertCtrl.create({
  message: 'Invalid country code selected.',
  subHeader: 'Warning.',
  buttons: ['Dismiss']
 });
 await alert.present(); 
}

  checkOTP(){
    if(this.inpt_country === undefined){
        this.c_bool = 0;
    } else {
      this.c_bool = 1;
      var str = new String(this.inpt_mobile); 
      if(str.charAt(0) === '0'){
        this.inpt_mobile = this.inpt_mobile.substr(1);
      }
    }
  }

  sendOTP() {
    this.checkOTP();
    var phone = new Number(this.inpt_mobile);
    var country_code = new Number(this.inpt_country);
    var mobile = country_code.toString()+phone.toString();
    this.complete_mobile = mobile;
    if(phone.toString().length != 10 || this.c_bool === 0) {
      this.presentAlert();
    }
    else {
    let body = {
      mobile_num : mobile,
      code : this.num,
    };
    this.smsPvdr.smsData(body, 'send-sms.php').subscribe(data => {
      if(data.result === 'error') {
        this.presentAlertInvalidCountry();
      } else {
          if(data.success){
            this.presentAlertSent();
          } else {
            this.presentAlertNotSent();
          }
      }
    });
    }

  }


  login(){
    var v_code = new Number(this.inpt_code);
    if(v_code == this.num){
      this.presentToast();
      this.storage.set('login_used', "mobile");
      this.storage.set('mobile_num', this.complete_mobile);
      this.mobileconnect();
    } else {
      this.presentAlertError();
    }
  }

  mobileconnect(){
    let body = {
      action : "checkmobile",
      mobile_num : this.complete_mobile,
    };

    this.postPvdr.postData(body, 'credentials-api.php').subscribe(data => {
      this.router.navigate(["/tabs"]);
    });
  }
}
