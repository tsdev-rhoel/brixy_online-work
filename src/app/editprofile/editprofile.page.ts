import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/credential-provider';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  fname: any;
  lname: any;
  nickname: any;
  age: any;
  gender: any;
  city: any;
  zip_code: any;
  country: any;
  email: any;
  mobile_num: any;
  picture:any;
  complete_pic:any;

  login_used : any;

  inpt_fname : string;
  inpt_lname : string;
  inpt_nickname : string;
  inpt_age : string;
  inpt_gender : string;
  inpt_city : string;
  inpt_zip_code : string;
  inpt_country : string;
  inpt_email : string;
  inpt_mobile_num : string;

  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    private storage: Storage,
    private toastController: ToastController,
    ) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your profile has been saved.',
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
  async presentToastWarning() {
    const toast = await this.toastController.create({
      message: "A problem occured. Please try to login again.",
      duration: 3000
    });
    toast.present();
  }

  goBack(){
    this.router.navigate(['myaccount']);
  }

  upload_photo(){
    this.router.navigate(['uploadphoto']);
  }

  ngOnInit() {
    this.get_profile();
  }
  async get_profile(){
    
    this.storage.get('login_used').then((login) => {
      this.login_used = new String(login);
      console.log("Login: "+this.login_used);
      if(login === "facebook" || login === "google"){
        this.storage.get('email').then((email) => {
          if(email !== null){
            return new Promise(resolve => {
              let body = {
                action : 'get_profile',
                login_used : login,
                email : email
              };
              this.postPvdr.postData(body, 'credentials-api.php').subscribe(async data => {
                if(data.result.fname){
                  this.fname = data.result.fname;
                  this.lname = data.result.lname;
                }else{
                  this.fname = "";
                  this.lname = "";
                }
                  this.picture = data.result.photo;
                  this.complete_pic = "https://telmotestserver.website/brixy-file-server/images/"+this.picture;
                  this.nickname = data.result.nickname;
                  this.age = data.result.age;
                  this.gender = data.result.gender;
                  this.city = data.result.city;
                  this.zip_code = data.result.zip_code;
                  this.country = data.result.country;
                  this.email = data.result.email;
                  this.mobile_num = data.result.mobile_num;
                resolve(true);
              });
            });
          } else {
            this.fname = "Anonymous";
            this.lname = "User";
            this.city = "Unknown";
            this.country = "Address";
          }
        });

      } else {

        this.storage.get('mobile_num').then((mobile_num) => {
          if(this.login_used == "mobile"){
            return new Promise(resolve => {
              let body = {
                action : 'get_profile_mobile',
                mobile_num : mobile_num
              };
              this.postPvdr.postData(body, 'credentials-api.php').subscribe(async data => {
                if(data.result.fname !== 'null'){
                  this.fname = data.result.fname;
                  this.lname = data.result.lname;
                }else{
                  this.fname = "";
                  this.lname = "";
                }
                  this.picture = data.result.photo;
                  this.complete_pic = "https://telmotestserver.website/brixy-file-server/images/"+this.picture;
                  this.nickname = data.result.nickname;
                  this.age = data.result.age;
                  this.gender = data.result.gender;
                  this.city = data.result.city;
                  this.zip_code = data.result.zip_code;
                  this.country = data.result.country;
                  this.email = data.result.email;
                  this.mobile_num = data.result.mobile_num;
                resolve(true);
              });
            });
          } else {
            this.fname = "Anonymous";
            this.lname = "User";
            this.city = "Unknown";
            this.country = "Address";
          }
        });
      }
    });
  }
  save_profile(){
    this.storage.get('login_used').then((login) => {
      if(login == "mobile"){
        if(this.inpt_fname !== undefined && this.inpt_lname !== undefined && this.inpt_nickname !== undefined && this.inpt_age !== undefined && this.inpt_gender !== undefined && this.inpt_city !== undefined && this.inpt_zip_code !== undefined && this.inpt_country !== undefined && this.inpt_email !== undefined && this.inpt_mobile_num !== undefined){

          let body = {
            action : 'save_profile_mobile',
            fname : this.inpt_fname,
            lname : this.inpt_lname,
            nickname : this.inpt_nickname,
            age : this.inpt_age,
            gender : this.inpt_gender,
            city : this.inpt_city,
            zip_code : this.inpt_zip_code,
            country : this.inpt_country,
            email : this.inpt_email,
            mobile_num :this.inpt_mobile_num
          };
          this.postPvdr.postData(body, 'credentials-api.php').subscribe(data => {
            if(data.success){
              this.presentToast();
            }
        });
      } else{
        this.presentToastLack();
      }
      } else {
        //this.presentToastWarning();
        if(this.inpt_fname !== undefined && this.inpt_lname !== undefined && this.inpt_nickname !== undefined && this.inpt_age !== undefined && this.inpt_gender !== undefined && this.inpt_city !== undefined && this.inpt_zip_code !== undefined && this.inpt_country !== undefined && this.inpt_email !== undefined && this.inpt_mobile_num !== undefined){

          let body = {
            action : 'save_profile',
            login_used : login,
            fname : this.inpt_fname,
            lname : this.inpt_lname,
            nickname : this.inpt_nickname,
            age : this.inpt_age,
            gender : this.inpt_gender,
            city : this.inpt_city,
            zip_code : this.inpt_zip_code,
            country : this.inpt_country,
            email : this.inpt_email,
            mobile_num :this.inpt_mobile_num
          };
          this.postPvdr.postData(body, 'credentials-api.php').subscribe(data => {
            if(data.success){
              this.presentToast();
            }
          });
        } else {
          this.presentToastLack();
        }
      }
    });
  }
}
