import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false

  constructor(private router: Router, private userService: UserService) {
   }

  ngOnInit(): void {
  }

  signUp() {
    this.router.navigate(['signup'])
  }

  login() {
    this.loggedIn()
    this.router.navigate(['login'])
  }

  loggedIn(): boolean{
    this.isLoggedIn = this.userService.isLoggedIn()
    return this.isLoggedIn
  }

  logout() {
    localStorage.removeItem('Token');
    this.router.navigate([ 'login' ]);
  }

}
