import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { LoginService } from './login.service';
import{LoginService} from './login-service';
import { AuthService } from '../../auth.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  isLoading=false;
      error:any=null
  
  constructor(private authService: LoginService, private router:Router,private authServices: AuthService,){}
  
  
  onSubmit(form:NgForm){
   if(!form.valid){
    return;
   }


   const {email, password } = form.value;
    this.isLoading=true; 

   this.authService.login(email,password).subscribe(resData=>{
    console.log(resData);
    this.isLoading=false;
    
    // alert("successfully loggedin");
    
    this.authServices.login()
    this.router.navigate(['/JobsApplication/my-profile'])
 
   },

  
      errorMessage=>{
        alert(errorMessage);
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
     
      }
   );
      
  }


}

