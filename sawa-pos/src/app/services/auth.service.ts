import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  userId: string ='';
  
  constructor(private afAuth: AngularFireAuth) {
      this.user = afAuth.user;
  }


  onRegiste(email:string ,password:string){
    return this.afAuth.createUserWithEmailAndPassword(email,password);    
  }

  OnLogin(email:string,password:string){
    return this.afAuth.signInWithEmailAndPassword(email,password);
  }

  Logout(){
    return this.afAuth.signOut();
  }

}
