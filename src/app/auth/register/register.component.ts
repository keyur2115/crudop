import { Component,OnInit } from '@angular/core';
import { RouterModule ,Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFormObj:any = {
    firstName:'',
    lastName:'',
    userName:'',
    email:'',
    phoneNum:'',
  }

  // loginFormData:any = {};

  constructor(private router:Router){

  }

  ngOnInit():void {

  }

  onRegister(form:any){
    if(form.valid){
      localStorage.setItem("loginFormData", JSON.stringify(form.value));
      this.router.navigate(['/auth/login']);
    }
  }
}
