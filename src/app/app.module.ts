import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AuthentificationComponent } from './authentification/authentification.component';
import { SignupPageComponent } from './authentification/signup-page/signup-page.component';
import { LoginPageComponent } from './authentification/login-page/login-page.component';
import { ForgetPasswordComponent } from './authentification/forget-password/forget-password.component';
import { FooterComponent } from "./pages/footer/footer.component"
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ManyConnectionsComponent } from './authentification/many-connections/many-connections.component';
import { SelectionBarsComponent } from './pages/selection-bars/selection-bars.component';
import { SideBarsComponent } from './pages/side-bars/side-bars.component';
import { MyApplicationBodyComponent } from './pages/my-application-body/my-application-body.component';
import { MyOffersComponent } from './pages/my-offers/my-offers.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ChangePasswordComponent } from './authentification/change-password/change-password.component';
import { NewPasswordComponent } from './authentification/new-password/new-password.component';
import { PasswordResetComponent } from './authentification/password-reset/password-reset.component';
import { HeadingApplicationComponent } from './pages/heading-application/heading-application.component';
import { MyHistoryComponent } from './pages/my-history/my-history.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { ProductDesignComponent } from './modals/product-design/product-design.component';
import { EduInf0Component } from './modals/edu-inf0/edu-inf0.component';
import {  MyProfileModalComponent } from './pages/my-profile/my-profile-modal.component';
import { ProjectsComponent } from './modals/projects/projects.component';
// import { ModalRoutesComponent } from './modal-routes/modal-routes.component';
// import { MyModuleModule } from './my-module/my-module.module';
import { SharedModule } from './shared/shared.module';
import { MyProjectModalComponent } from './pages/my-profile/my-project-modal.component';
// import { DocumentsComponent } from './modals/documents/documents.component';
// import { DocumentsModalComponent } from './documents-modal/documents-modal.component';
import { AboutMeComponent } from './about-me/about-me.component';
import{ProductDesignModalComponent} from './pages/my-profile/product-design-modal.component';
import{DocumentsModalComponent} from './pages/my-profile/documents-modal.component';
import{AboutMeCreatedComponent}  from './pages/my-profile/about-me-modal.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { ManyConnectionTwoComponent } from './authentification/many-connection-two/many-connection-two.component';
// import {QuillingComponent} from "./quilling/quilling.component"
import { QuillModule } from 'ngx-quill';
import { QuillingComponent } from './quilling/quilling.component';
import {ApplicationGuardService} from './application-guard.service'
import { AuthService } from './auth.service';
// import { LogoutComponent } from './pages/logout/logout.component';
import { AccountCreatedComponent } from './authentification/account-created/account-created.component';
import { VerifiedComponent } from './authentification/verified/verified.component';





// import { CustomModal } from './shared/components/custom-modal/custom-modal.component';
// import { MyApplicationsComponent } from './pages/my-applications/my-applications.component';

@NgModule({
  declarations: [
    AppComponent,
    // AuthentificationComponent,
    SignupPageComponent,
    LoginPageComponent,
    ForgetPasswordComponent,
    FooterComponent,
    NavbarComponent,
    ManyConnectionsComponent,
    SelectionBarsComponent,
    SideBarsComponent,
    MyApplicationBodyComponent,
    MyOffersComponent,
    JobsComponent,
    ChangePasswordComponent,
    NewPasswordComponent,
    PasswordResetComponent,
    HeadingApplicationComponent,
    MyHistoryComponent,
    MyProfileComponent,
    MyProfileModalComponent,
    ProductDesignComponent,
    MyProjectModalComponent,
    EduInf0Component,
    ProjectsComponent,
    AboutMeCreatedComponent,
    DocumentsModalComponent,
    AboutMeComponent,
    // DocumentsComponent,
    ProductDesignModalComponent,
    LoadingSpinnerComponent,
    ManyConnectionTwoComponent,
    QuillingComponent,
    // LogoutComponent,
    AccountCreatedComponent,
    VerifiedComponent,
    
    
    // CustomModal
    
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    QuillModule.forRoot(),
    
   
    // AngularToastifyModule,
   
    
    // MyModuleModule
  ],
  providers: [ApplicationGuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
