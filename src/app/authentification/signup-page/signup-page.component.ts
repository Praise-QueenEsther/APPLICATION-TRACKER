import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
      isLoading=false;
      error:any=null
  
  constructor(private authService: SignupService, private router:Router){}
  onSubmit(form:NgForm){
   if(!form.valid){
    return;
   }

  
   const {email, password, confirmPassword } = form.value;
    this.isLoading=true;
   
   this.authService.signup(email,password,confirmPassword).subscribe(resData=>{
    console.log(resData);
    this.isLoading=false;
  
    
    alert("successfully signedup")
    this.router.navigate(["/accountCreated"])
   
   },
      errorMessage=>{
      alert(errorMessage);
        this.error=errorMessage;
        this.isLoading=false;
      }
   );
      
      
  }

}
