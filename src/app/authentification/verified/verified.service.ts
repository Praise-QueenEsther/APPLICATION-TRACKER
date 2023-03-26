import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, pipe } from "rxjs";
import { throwError } from "rxjs";


@Injectable({providedIn: 'root'})
export class VerifiedService{
    constructor (private http: HttpClient){}


    verified(verificationToken:any){
        return this.http.put("http://localhost:8080/verified/" + verificationToken,{})



        .pipe(

            catchError((errorRes) => {
                let errorMessage = errorRes
                if (errorRes.error && errorRes.error.msg) {
                  errorMessage = errorRes.error.msg;
                }
                return throwError(errorMessage);
              })
            
    
                 );
    }       

        
    


}