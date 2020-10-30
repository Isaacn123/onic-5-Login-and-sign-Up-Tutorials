import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage implements OnInit {


  constructor() { }

  ngOnInit() {

  }

LoginUser(value){
  console.log("Am logged in")
}

}
