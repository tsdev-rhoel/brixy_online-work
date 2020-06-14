import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'ads', loadChildren: './ads/ads.module#AdsPageModule' },
  { path: 'guide', loadChildren: './guide/guide.module#GuidePageModule' },
  { path: 'choose', loadChildren: './choose/choose.module#ChoosePageModule' },
  { path: 'facebook', loadChildren: './facebook/facebook.module#FacebookPageModule' },
  { path: 'mobilee', loadChildren: './mobilee/mobilee.module#MobileePageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'brixyloads', loadChildren: './brixyloads/brixyloads.module#BrixyloadsPageModule' },
  { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
  { path: 'termsconditions', loadChildren: './termsconditions/termsconditions.module#TermsconditionsPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'tab5', loadChildren: './tab5/tab5.module#Tab5PageModule' },
  { path: 'tab6', loadChildren: './tab6/tab6.module#Tab6PageModule' },
  { path: 'myaccount', loadChildren: './myaccount/myaccount.module#MyaccountPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'editprofile', loadChildren: './editprofile/editprofile.module#EditprofilePageModule' },
  { path: 'message', loadChildren: './message/message.module#MessagePageModule' },
  { path: 'viewlive', loadChildren: './viewlive/viewlive.module#ViewlivePageModule' },
  { path: 'allgifts', loadChildren: './allgifts/allgifts.module#AllgiftsPageModule' },
  { path: 'brixyvideo', loadChildren: './brixyvideo/brixyvideo.module#BrixyvideoPageModule' },
  { path: 'mybroadcast', loadChildren: './mybroadcast/mybroadcast.module#MybroadcastPageModule' },
  { path: 'sendgiftbronzemodal', loadChildren: './sendgiftbronzemodal/sendgiftbronzemodal.module#SendgiftbronzemodalPageModule' },
  { path: 'sendgiftsilvermodal', loadChildren: './sendgiftsilvermodal/sendgiftsilvermodal.module#SendgiftsilvermodalPageModule' },
  { path: 'sendgiftgoldmodal', loadChildren: './sendgiftgoldmodal/sendgiftgoldmodal.module#SendgiftgoldmodalPageModule' },
  { path: 'sendgiftpopularmodal', loadChildren: './sendgiftpopularmodal/sendgiftpopularmodal.module#SendgiftpopularmodalPageModule' },
  { path: 'terms', loadChildren: './terms/terms.module#TermsPageModule' },
  { path: 'privacy', loadChildren: './privacy/privacy.module#PrivacyPageModule' },
  { path: 'readytogolive', loadChildren: './readytogolive/readytogolive.module#ReadytogolivePageModule' },
  { path: 'wallet', loadChildren: './wallet/wallet.module#WalletPageModule' },
  { path: 'historypreview', loadChildren: './historypreview/historypreview.module#HistorypreviewPageModule' },
  { path: 'historygiftpreview', loadChildren: './historygiftpreview/historygiftpreview.module#HistorygiftpreviewPageModule' },
  { path: 'termsconditionslogin', loadChildren: './termsconditionslogin/termsconditionslogin.module#TermsconditionsloginPageModule' },
  { path: 'liveprofile', loadChildren: './liveprofile/liveprofile.module#LiveprofilePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'uploadphoto', loadChildren: './uploadphoto/uploadphoto.module#UploadphotoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
