// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import {VerifiedService} from './verified.service'

// @Component({
//   selector: 'app-verified',
//   templateUrl: './verified.component.html',
//   styleUrls: ['./verified.component.css']
// })


// export class VerifiedComponent {
//   error:any=null
//   constructor(private authService: VerifiedService, private router:Router){}



//   this.authService.verified().subscribe(resData=>{
//     console.log(resData);
//     this.isLoading=false;
  
    
//     alert("successfully signedup")
//     this.router.navigate(["/accountCreated"])
   
//    },
//       errorMessage=>{
//       alert(errorMessage);
//         this.error=errorMessage;
//         this.isLoading=false;
//       }
//    );
      
      





// }

// import { Component } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { VerifiedService } from './verified.service';

// @Component({
//   selector: 'app-verified',
//   templateUrl: './verified.component.html',
//   styleUrls: ['./verified.component.css']
// })

// export class VerifiedComponent {
//   error: any = null;
//   isLoading: boolean = true;
//   id: string = ''; 

//   constructor(private authService: VerifiedService, private router: Router){}


//   ngOnInit() {
//     const id = this.id; 
//     this.authService.verified(id).subscribe(
//       resData => {
//         console.log(resData);
//         this.isLoading = false;
//         alert("Successfully signed up");
//         this.router.navigate(["/"]);
//       },


//       errorMessage => {
//         alert(errorMessage);
//         this.error = errorMessage;
//         this.isLoading = false;
//       }
//     );
//   }
// }

// 



import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { VerifiedService } from './verified.service';

@Component({
  selector: 'app-verified',
  templateUrl: './verified.component.html',
  styleUrls: ['./verified.component.css']
})

export class VerifiedComponent implements OnInit {
  error: any = null;
  // isLoading: boolean = true;
  resData:any

  constructor(
    private authService: VerifiedService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const verificationToken = this.activatedRoute.snapshot.paramMap.get('verificationToken');
    console.log(verificationToken)
    if(!verificationToken ){
      this.error = "no verification token provided";
      return;
    }

    this.authService.verified(verificationToken).subscribe({
      next:(item)=>{
        this.resData = item
        if(this.resData !==null){
        // this.isLoading = false;
        alert(this.resData.message);
        setTimeout(()=>{
          this.router.navigate([" "]);
        }, 2000);
      }
      },
      error:(error)=>{
        alert(error)
          this.error=error
      }
      // errorMessage => {
      //   alert(errorMessage);
      //   this.error = errorMessage;
      //   // this.isLoading = false;
      // }
    });
  }
}
