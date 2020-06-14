import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/credential-provider';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage implements OnInit {
  user: any;
  id: any;
  picture: any;
  fname: any;
  lname: any;
  city: any;
  country: any;
  complete_pic:any;
 
  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    private storage: Storage,
    ) { }

  goBack(){
    this.router.navigate(['tabs']);
  }
  goFavorites(){
    this.router.navigate(['tabs/tab2']);
  }
  goSettings(){
    this.router.navigate(['settings']);
  }
  goEditProfile()
  {
    this.router.navigate(['editprofile']);
  }
  goWallet(){
    this.router.navigate(['wallet']);
  }
  goPublished(){
    this.router.navigate(['mybroadcast']);
  }
  goStore(){
    this.router.navigate(['tab4']);
 }
 update_photo(){
  this.router.navigate(['uploadphoto']);
}

  ngOnInit() {
    this.loadUser();
  }

  async loadUser(){
    
    this.storage.get('email').then((email) => {
      if(email){

        this.storage.get('login_used').then((login) => {
          if(login){
              let body = {
                action : 'getuserdata',
                login_used : login,
                email : email
              };
              this.postPvdr.postData(body, 'credentials-api.php').subscribe(async data => {
                if(data.success){
                  this.picture = data.result.photo;
                  this.complete_pic = "https://telmotestserver.website/brixy-file-server/images/"+this.picture;
                  this.id = data.result.id;
                  this.fname = data.result.fname;
                  this.lname = data.result.lname;
                  this.city = data.result.city;
                  this.country = data.result.country;
                } else {
                  this.id = "0";
                  this.fname = "Anonymous";
                  this.lname = "User";
                  this.city = "Unknown";
                  this.country = "Address";
                }
              });
          } else {
            this.id = "00";
            this.fname = "Anonymous";
            this.lname = "User";
            this.city = "Unknown";
            this.country = "Address";
          }
        });

      } else {
        this.storage.get('mobile_num').then((mobile_num) => {
          if(mobile_num){
            let body = {
              action : 'getuserdata_mobile',
              mobile_num : mobile_num,
            };
            this.postPvdr.postData(body, 'credentials-api.php').subscribe(async data => {
              if(data.success){
                this.id = data.result.id;
                this.picture = "https://telmotestserver.website/brixy-file-server/images/"+data.result.photo;
                this.complete_pic = "https://telmotestserver.website/brixy-file-server/images/"+this.picture;
                this.fname = data.result.fname;
                this.lname = data.result.lname;
                this.city = data.result.city;
                this.country = data.result.country;
              } else {
                this.id = "0000";
                this.fname = "Anonymous";
                this.lname = "User";
                this.city = "Unknown";
                this.country = "Address";
              }
            });

          } else {
            this.id = "000";
            this.fname = "Anonymous";
            this.lname = "User";
            this.city = "Unknown";
            this.country = "Address";
          }
        });
        
      }
      console.log("Photo: "+this.picture);
    });
  }

}
