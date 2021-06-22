import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private fireStorage:AngularFirestore) { }
  
  // Add User Info under 'users/" fire storge 
  addNewUser(id?:string,name?:string){
     return this.fireStorage.doc('users/' + id).set({
      accountType: 'user',
      username:name
     });
  }
}
