import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage';
import { PostProvider } from '../../providers/credential-provider';

@Component({
  selector: 'app-uploadphoto',
  templateUrl: './uploadphoto.page.html',
  styleUrls: ['./uploadphoto.page.scss'],
})
export class UploadphotoPage implements OnInit {

  image:any;
  loader:any;
  name:any;
  fileName:any;
  key_email:any;
  key_mobile:any;
  rand = Math.floor(Math.random() * 1000000) + 8;
 
  constructor(
    private router: Router,
    private loadingCtrl : LoadingController,
    private camera: Camera,
    private transfer: FileTransfer,
    private file: File,
    private storage: Storage,
    private toastController: ToastController,
    private postPvdr: PostProvider,
  ) { }

  ngOnInit() {
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Profile picture updated.',
      duration: 3000
    });
    toast.present();
  }

  async loading(){
    //show loading
    this.loader = await this.loadingCtrl.create({
      message: "Uploading..."
    });
    this.loader.present();
  }
  getImage() {
    const cameraOptions: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }
    this.camera.getPicture(cameraOptions).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.image = base64Image;
    }, (err) => {
      
      console.log(err);
      // Handle error
    });
  }

  // cropImage(){
  //   const options: CameraOptions = {
  //     quality: 70,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  //     saveToPhotoAlbum: false,
  //     allowEdit: true,
  //     targetWidth: 250,
  //     targetHeight: 250
  //   }

  //   this.camera.getPicture(options).then((imageData) => {
  //     this.image = 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //       //handle error
  //   });
  // }

  uploadphoto() {
    this.loading();
    const fileTransfer: FileTransferObject = this.transfer.create();
    this.storage.get('email').then((email) => {
      if(email) {
        this.key_email = email;
          this.fileName = "brixy_"+this.rand+"_"+email+".jpg";
      } else {
        this.storage.get('mobile_num').then((mobile_num) => {
          if(mobile_num){
            this.key_mobile = mobile_num
            this.fileName = "brixy_"+this.rand+"_"+mobile_num+".jpg";
          } else {
            alert("Unable to update, your session has expired. Please try logging in again.");
          }
        });
      }
      let options: FileUploadOptions = {
        fileKey: 'photo',
        fileName: this.fileName,
        chunkedMode: false,
        httpMethod: 'post',
        mimeType: "image/jpeg",
        headers: {}
      }
  
      fileTransfer.upload(this.image, 'https://telmotestserver.website/brixy-file-server/images_upload.php', options)
      .then((data) => {
        if(this.key_email){
            let body = {
              action : "update_picture",
              email : this.key_email,
              picture : this.fileName
            };
            this.postPvdr.postData(body, 'credentials-api.php').subscribe(data => {
              if(data.success){
                this.loader.dismiss();
                this.presentToast();
                this.router.navigate(['myaccount']);
              } else {
                alert("Please check your internet connection and try again.");
              }
            });
        } else if (this.key_mobile) {
            let body = {
              action : "update_picture_mobile",
              mobile : this.key_mobile,
              picture : this.fileName
            };
            this.postPvdr.postData(body, 'credentials-api.php').subscribe(data => {
              if(data.success){
                this.loader.dismiss();
                this.presentToast();
                this.router.navigate(['myaccount']);
              } else {
                alert("Please check your internet connection and try again.");
              }
            });
        } else {
            alert("Unable to update, your session has expired. Please try logging in again.");
        }
      }, (err) => {
        console.log(err);
        this.loader.dismiss();
        alert("Please check your internet connection and try again.");
      });

    });

  }

}
