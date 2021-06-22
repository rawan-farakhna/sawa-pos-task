import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private router:Router,
    private afAuth:AngularFireAuth,
  ) {}

//Avoide login user to navigate login/signup page 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve, reject) => {
        this.afAuth.onAuthStateChanged((user) => {
            if (user) {
                console.log('Auth Guard: user is logged in');
                //a logged In user will always be sent to upload file and in future to dashboard
                 this.router.navigate(['/upload']); 
                resolve(false);
            
            } else {
               // a logged out user will always have prermision to access login page
                resolve(true);
            }
        });
      });
  }

  
}
