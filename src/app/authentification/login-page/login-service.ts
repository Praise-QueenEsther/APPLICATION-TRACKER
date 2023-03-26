import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, pipe } from "rxjs";
import { throwError } from "rxjs";
// import { ToastService } from 'angular-toastify';

// interface AuthResponseData{
//     email: string;
//     idToken: string;
//     localId: string;
//     refreshToken: string;
//     kind: string;
// <AuthResponseData>

// }




@Injectable({providedIn: 'root'})

export class LoginService{
    constructor (private http: HttpClient){}


    login(email: string, password: string){
        return this.http.post("http://localhost:8080/login",
                {
                    email: email,
                    password: password,
                    returnSecureToken: true

                }
                
        )
       .pipe(catchError(this.handleError))
        

    }

    // private handleError (errorRes: HttpErrorResponse) {

    //         let errorMessage="An unknown error occured";
    //         if(!errorRes.error){
    //             // return throwError(errorMessage);
    //             return throwError({msg:'email not found'})
    //         }
            
    //         switch(errorRes.message){
    //             case "EMAIL_EXISTS":
    //             errorMessage="This email does not exist"
    //             break;
    //             case "EMAIL_NOT_FOUND":
    //             errorMessage="This email does not exist"
    //             break;
    //             case "INVALID_PASSWORD":
    //             errorMessage="This password is not correct"
    //             break;

    //            }

    //         return throwError(errorMessage)
    //     }


        private handleError (errorRes: HttpErrorResponse) {
            let errorMessage: string;
          
            if (errorRes.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              errorMessage = errorRes.error.message;
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong.
              switch (errorRes.status) {
                case 400:
                  errorMessage = 'Kindly provide your email and password';
                  break;
                case 404:
                  errorMessage = errorRes.error.msg;
                  break;
                case 500:
                  errorMessage = 'An unknown error occurred. Please try again later.';
                  break;
                default:
                  errorMessage = 'Something went wrong. Please try again later.';
              }
            }
          
            return throwError(errorMessage);
          }
          
        

        

}