import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonService } from '../Services/button-service.service';
import { UserService } from '../Services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, private route: Router, private userService: UserService, private buttonService: ButtonService) { 
    this.loginForm = formBuilder.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.compose([Validators.required])]
    })
    this.buttonService.showbutton = true

  }

  login(){
    console.log(this.loginForm.value);
    this.userService.login(this.loginForm.value).subscribe((data: any) => {
      console.log(data.success)
      localStorage.setItem('Token', data.token);
      
      if(data.success === true) {
        localStorage.setItem('Role', data.userCred.role)
        if(data.userCred.role === 'admin') {
          this.route.navigate(['admin'])
        } else {
          this.route.navigate(['customer'])
        }
      } else if (data.success === false){
        alert('Wrong email or password')
        this.loginForm.reset()
        this.route.navigate(['login'])
      }
      
      
    },
      (error)=> {
        console.log(error)
        alert(error)
        this.route.navigate(['login'])
      })
  }

 
}
