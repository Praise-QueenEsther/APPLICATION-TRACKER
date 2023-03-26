import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, pipe } from "rxjs";
import { throwError } from "rxjs";

interface AuthResponseData{
    email: string;
    idToken: string;
    localId: string;
    refreshToken: string;
    kind: string;

}




@Injectable({providedIn: 'root'})

export class SignupService{
    constructor (private http: HttpClient){}


    signup(email: string, password: string, confirmPassword: string){
        console.log({email,password,confirmPassword})
        return this.http.post<AuthResponseData>("http://localhost:8080/signup",
                {
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword,
                    returnSecureToken: true

                }

        )


       .pipe(

        catchError((errorRes) => {
            let errorMessage = "Unknown error occurred!";
            if (errorRes.error && errorRes.error.msg) {
              errorMessage = errorRes.error.msg;
            }
            return throwError(errorMessage);
          })
        

             );
    }


}

