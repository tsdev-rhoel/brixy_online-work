import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { Storage } from '@ionic/storage';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { PostProvider } from '../../providers/credential-provider';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.page.html',
  styleUrls: ['./choose.page.scss'],
})
export class ChoosePage implements OnInit {
  user:any = {};
  userData : any;
  loader:any;
  ui = null;
  facebookResponse: FacebookLoginResponse;

  constructor(
    private router: Router,
    public alertCtrl: AlertController,
    private loadingCtrl : LoadingController,
    public toastController: ToastController,
    public afAuth: AngularFireAuth,
    public googlePlus: GooglePlus,
    private fb: Facebook,
    private postPvdr: PostProvider,
    private storage: Storage
    ) { }

    async loading(){
      //show loading
      this.loader = await this.loadingCtrl.create({
        message: '<img src="assets/icon/brixylogo.png" style="height: 25px" height="auto" alt="loading...">',
        translucent: true,
        showBackdrop: false,
        spinner: null,
        duration: 2000
      });
      this.loader.present();
    }

    async presentToastFailed() {
      const toast = await this.toastController.create({
        message: 'Login Failed.',
        duration: 3000
      });
      toast.present();
    }
    prepareToast(){
      if(this.userData.first_name === null || this.userData.first_name === undefined || this.userData.first_name === 'null'){
        //this.presentToastPreGoogle();
        let element: HTMLElement = document.getElementsByClassName('firebaseui-idp-google')[0] as HTMLElement;
        element.click();
        this.loader.dismiss();
      } else {
        this.storage.set('email', this.userData.email);
        this.storage.set('login_used', "google");
        this.storage.set('fname', this.userData.first_name);
        this.loader.dismiss();
        this.presentToast();
        this.router.navigate(["/tabs"]);
      }
    }
    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Welcome to Brixy Live, '+this.userData.first_name+'!',
        duration: 3000
      });
      toast.present();
    }
    // async presentToastPreGoogle() {
    //   const toast = await this.toastController.create({
    //     message: 'You can now login using Google. Please tap again the button.',
    //     duration: 5000
    //   });
    //   toast.present();
    // }
    async presentAlertnoFbEmail() {
      const alert = await this.alertCtrl.create({
      message: 'An error occurred during the sign-up registration of your Facebook account. Please verify your email in Facebook, or login through Google or SMS to register.',
      subHeader: 'Verify email in Facebook.',
      buttons: ['OK']
     });
     await alert.present(); 
  }
    
  google(){
    this.googlePlus.login({
    }).then(res => {
      this.loading();
      this.userData = {id : res.userId, email : res.email, first_name : res.givenName, username : res.displayName, last_name : res.familyName};
      this.googleconnect();
    });
  }

  googleconnect(){

    let body = {
      action : 'checkgoogle',
      id : this.userData.id,
      email : this.userData.email,
      first_name : this.userData.first_name,
      last_name : this.userData.last_name,
      username : this.userData.username,
    };
    this.postPvdr.postData(body, 'credentials-api.php').subscribe(data => {
      this.prepareToast();
    });
  }

  facebook(){
    this.fb.login(['public_profile', 'email']).then((res: FacebookLoginResponse) => {
       this.fb.api('me?fields=id,name,email,first_name', []).then(profile => {
        if(profile['email'] === undefined || profile['email'] === 'undefined'){
          this.presentAlertnoFbEmail();
          this.presentToastFailed();
          this.fb.logout();
          this.loader.dismiss();
        }else{
          this.loading();
          this.userData = {id : profile['id'], email: profile['email'], first_name: profile['first_name'], username: profile['name']};
          this.storage.set('email', profile['email']);
          this.storage.set('login_used', "facebook");
          this.storage.set('fname', profile['first_name']);
          this.fbconnect();
        }
       });
     }
     ).catch(e => this.presentToastFailed());
  }

  async fbconnect(){

    let body = {
      action : "checkfacebook",
      id : this.userData.id,
      email : this.userData.email,
      first_name : this.userData.first_name,
      username : this.userData.username
    };

    this.postPvdr.postData(body, 'credentials-api.php').subscribe(data => {
      this.loader.dismiss();
      this.presentToast();
      this.router.navigate(["/tabs"]);
    });
  }

  // toFacebook(){
  //   this.router.navigate(['facebook']);
  // }
  mobile(){
    this.router.navigate(['/mobilee']);
  }
  // toGuest(){
  //   this.router.navigate(['tabs']);
  // }

  ngOnInit() {
    this.afAuth.auth.signOut();
    this.storage.clear();
    //console.log(this.afAuth.auth);
  }
   
  
}
