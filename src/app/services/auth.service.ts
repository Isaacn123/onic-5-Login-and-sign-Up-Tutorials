import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth'
import { GooglePlus } from '@ionic-native/google-plus/ngx';
// import { GooglePlus } from '@ionic-native/google-plus/ngx';

export  interface UserPro{
  username: string;
  uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user : UserPro;

  constructor(public auth: AngularFireAuth, private googleplus: GooglePlus) { }


  loginFireauth(value){
   return new Promise<any> ( (resolve, reject)=>{
     firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(
       res => resolve(res),
       error => reject(error)
     )
   })
  }


  setUser(user: UserPro){
    return this.user = user;
  }

  getUID(): string{
    return this.user.uid;
  }



  userRegistration(value){
    return new Promise<any> ( (resolve, reject)=>{
      firebase.auth().createUserWithEmailAndPassword(value.email,value.password).then(
        res => resolve(res),
        error => reject(error)
      )
    })
  }

  GoogleloginAuth(){
    return this.googleplus.login({
      'scopes':'profile email',
                     
      'webClientId':'206201421419-u1mp61vt8faleo46c8n4lm3hadsam9i7.apps.googleusercontent.com',
      'offline':true
    });
  }
}
