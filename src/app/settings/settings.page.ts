import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Storage } from '@ionic/storage';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  selectedL : any;

  constructor(private router: Router,
    public afAuth: AngularFireAuth,
    public toastController: ToastController,
    private storage: Storage,
    public googlePlus: GooglePlus,
    private fb: Facebook
    ) { }
    async presentToast() {
      const toast = await this.toastController.create({
        message: 'You are now logged out.',
        duration: 3000
      });
      toast.present();
    }

  async signOut(){
    this.afAuth.auth.signOut().then(async () => {
      this.storage.get('login_used').then((login) => {
        if(login === 'facebook'){
          this.fb.logout();
        }
      });
      this.storage.get('login_used').then((login) => {
        if(login === 'google'){
          this.googlePlus.logout();
        }
      });
      
      await this.storage.clear();
      this.presentToast();
      this.router.navigate(['choose']);
    });
  }

  goBack(){
    this.router.navigate(['myaccount']);
  }
  toAccount(){
    this.router.navigate(['myaccount']);
  }

  ngOnInit() {
  }

}
