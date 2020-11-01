import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  newUser:any;
  constructor(
    private fireauth: AngularFireAuth,
    private db: AngularFirestore
  ) { }

  createUser(formValue){
    this.fireauth.createUserWithEmailAndPassword(formValue.email,formValue.password)
    .then( credential => {
          this.newUser = formValue;
          console.log(credential);
          console.log(this.newUser);
    })
  }
}
