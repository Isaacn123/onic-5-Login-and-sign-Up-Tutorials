import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'
import firebase from 'firebase/app'; 
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook/ngx'
import {firebaseAuth} from '../../../environments/authconfig';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private nav: NavController, private fbook: Facebook, private googleService : AuthService) {
  }

  ngOnInit() {
  }

  gotoLoginpage(){
    this.nav.navigateForward(['loginscreen']);
  }

  registerUser(){ 
    this.nav.navigateForward(['signup'])
  }

  loginwithFacebook(){
                  
   this.fbook.login(["public_profile","email"]).then( (response: FacebookLoginResponse)=>{
     console.log(response);
     const userId = response.authResponse.userID;
     const userToken = response.authResponse.accessToken;

     if(response.status === "connected"){
      console.log("FacebookRESP", response)                  

      firebaseAuth().signInWithCredential(firebase.auth.FacebookAuthProvider.credential(userToken)).then( response=>{
        console.log("user", response);
       if(response.user){
         this.nav.navigateForward(['tabs']);
       }

       this.fbook.api('/me?fields=name,email',['public_profile','email']).then( response=>{
          console.log("user-fb-API",response);
       
        response.picture = 'https://graph.facebook.com' + userId + 'picture?type=large';

        console.log("Userprofile-Picture:::",response.picture);
  

       }).catch(e=>{
         console.log(e);
       })



      }).catch(e =>{
        console.log(e);
      });

     }
   }, errro=>{
     console.log("FIRE:ERROR", errro)
   })
  }




  googlePlusLogin(){
    this.googleService.GoogleloginAuth().then( response =>{
      console.log('Google_resp', response);

    if(response){
       const userToken = response.idToken;
       const  userAccesToken = response.accessToken
      firebaseAuth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(userToken,userAccesToken)).then( userInfo=>{
       
        if(userInfo.user){
          this.nav.navigateForward(['tabs']);
          console.log("USER-INFO:::", userInfo)
        }
      }).catch(e =>{
        console.log(e);
      })
    }
    }).catch(e =>{
      console.log(e);
    })
  }

 
}
