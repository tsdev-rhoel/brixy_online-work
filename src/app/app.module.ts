import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ToastController } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { GiftbronzeComponent } from './giftbronze/giftbronze.component';
import { GiftgoldComponent } from './giftgold/giftgold.component';
import { GiftsilverComponent } from './giftsilver/giftsilver.component';
import { GiftpopularComponent } from './giftpopular/giftpopular.component';

import { Facebook } from '@ionic-native/facebook/ngx';

import { SendgiftbronzemodalPageModule } from './sendgiftbronzemodal/sendgiftbronzemodal.module';
import { SendgiftsilvermodalPageModule } from './sendgiftsilvermodal/sendgiftsilvermodal.module';
import { SendgiftgoldmodalPageModule } from './sendgiftgoldmodal/sendgiftgoldmodal.module';
import { SendgiftpopularmodalPageModule } from './sendgiftpopularmodal/sendgiftpopularmodal.module';
import { HistorypreviewPageModule } from './historypreview/historypreview.module';
import { HistorygiftpreviewPageModule } from './historygiftpreview/historygiftpreview.module';
import { AllgiftsPageModule } from './allgifts/allgifts.module';
import { LiveprofilePageModule } from './liveprofile/liveprofile.module';
import { RegisterPageModule } from './register/register.module';

import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { PostProvider } from '../providers/credential-provider';
import { SmsProvider } from '../providers/sms-provider';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInSuccessUrl: '/tabs',
  siteName: 'Brixy Live',
  signInFlow: 'popup',
  signInOptions: [
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: '/termsconditions',
  privacyPolicyUrl: '/termsconditions',
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
};


@NgModule({
  declarations: [AppComponent,GiftbronzeComponent,GiftgoldComponent,
    GiftsilverComponent,GiftpopularComponent],
  entryComponents: [GiftbronzeComponent,GiftgoldComponent,
    GiftsilverComponent,GiftpopularComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    SendgiftbronzemodalPageModule,
    SendgiftsilvermodalPageModule,
    SendgiftgoldmodalPageModule,
    SendgiftpopularmodalPageModule,
    HistorypreviewPageModule,
    HistorygiftpreviewPageModule,
    AllgiftsPageModule,
    RegisterPageModule,
    LiveprofilePageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [
    AndroidPermissions,
    Camera,
    StatusBar,
    SplashScreen,
    FileTransfer,
    File,
    Facebook,
    GooglePlus,
    PostProvider,
    SmsProvider,
    ToastController,
    VideoPlayer,
    YoutubeVideoPlayer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
