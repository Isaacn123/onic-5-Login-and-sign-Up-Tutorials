import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage implements OnInit {

  validationUserMessage ={
    email:[
      {type:"required", message:"Please enter your Email"},
      {type:"pattern", message:"The Email entered is Incorrect.Try again"}
    ],
    password:[
      {type:"required", message:"please Enter your Password!"},
      {type:"minlength", message:"The Password must be at least 5 characters or more"}

    ]
  }

  validationFormUser: FormGroup;

  constructor(public formbuider: FormBuilder, public authservice: AuthService) { }

  ngOnInit() {
  this.validationFormUser = this.formbuider.group({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(5)
    ]))
  })

  }

LoginUser(value){
  console.log("Am logged in");
  try{
     this.authservice.loginFireauth(value).then( resp =>{
       console.log(resp);
     })
  }catch(err){
    console.log(err);
  }
}

}
