import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  signupForm: FormGroup;



  constructor(private formBuilder: FormBuilder, private route: Router, private userService: UserService) { 
    this.signupForm = formBuilder.group({
      'fname': ['', Validators.compose([Validators.required])],
      'lname': ['', Validators.compose([Validators.required])],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.compose([Validators.required])],
      'address' :['', Validators.compose([Validators.required])],
      'role' :['admin']
    })

  }

  signUp(): void {
    console.log(this.signupForm.value);
    this.userService.signupUser(this.signupForm.value).subscribe((data) => {
      console.log(data)
      this.route.navigate(['login'])
    })
  }

}
