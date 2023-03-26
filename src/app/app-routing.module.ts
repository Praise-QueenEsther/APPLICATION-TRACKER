import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './authentification/signup-page/signup-page.component';
import { LoginPageComponent } from './authentification/login-page/login-page.component';
import {ForgetPasswordComponent} from "./authentification/forget-password/forget-password.component";
import { ManyConnectionsComponent } from './authentification/many-connections/many-connections.component';
import { MyApplicationBodyComponent } from './pages/my-application-body/my-application-body.component';
import { MyOffersComponent } from './pages/my-offers/my-offers.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ChangePasswordComponent } from './authentification/change-password/change-password.component';
import { NewPasswordComponent } from './authentification/new-password/new-password.component';
import { PasswordResetComponent } from './authentification/password-reset/password-reset.component';
import { MyHistoryComponent } from './pages/my-history/my-history.component';
// import { ProductDesignComponent } from './modals/product-design/product-design.component';
// import { EduInf0Component } from './modals/edu-inf0/edu-inf0.component';
// import { ProjectsComponent } from './modals/projects/projects.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { DocumentsComponent } from './modals/documents/documents.component';
// import { DocumentsModalComponent } from './documents-modal/documents-modal.component';
import { AboutMeComponent } from './about-me/about-me.component';
import {ApplicationGuardService}  from './application-guard.service';
import { AccountCreatedComponent } from './authentification/account-created/account-created.component';
import { VerifiedComponent } from './authentification/verified/verified.component';


const routes: Routes = [
  { path: 'signup', component: SignupPageComponent },
  {path:"",component:LoginPageComponent},
  {path:"forgotPassword",component:ForgetPasswordComponent},
  {path:"changePassword",component:ChangePasswordComponent},
  {path:"NewPassword",component:NewPasswordComponent},
  {path:"PasswordReset",component:PasswordResetComponent},
  // {path:"DocumentsModal",component:DocumentsModalComponent},
  {path:"AboutMe",component:AboutMeComponent},
  {path:"documents", component:DocumentsComponent},
  {path:"accountCreated",component:AccountCreatedComponent},
  {path:"Verified/:verificationToken",component:VerifiedComponent},

  // {path:"ProductDesign",component:ProductDesignComponent},
  // {path:"EduInfo",component:EduInf0Component},
  // {path:"Projects",component:ProjectsComponent},
  { path: "JobsApplication", component: ManyConnectionsComponent, canActivate:[ApplicationGuardService],
  children: [
    { path: '', component: MyApplicationBodyComponent },
    { path: 'my-offers', component: MyOffersComponent},
    { path: 'jobs', component:  JobsComponent},
    { path: 'my-profile', component:MyProfileComponent},
    { path: 'my-history', component: MyHistoryComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
