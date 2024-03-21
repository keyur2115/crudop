import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

 loginFormObj:any = {
    userName:'',
    password:''
 } 

 constructor(private router:Router){}

 ngOnInit():void{

 }

 onLogin(form:any){
  if(form.valid){
   let loginData = localStorage.getItem("loginFormData");

   // if(loginData){
      this.router.navigate(['/dashboard'])
   // }

  }
 }
}
