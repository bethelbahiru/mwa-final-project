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
  role: any;
  name: any;

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
    this.role = localStorage.getItem('Role')
    this.name = localStorage.getItem('Name')
    // setTimeout(()=> {
    //   this.name = localStorage.getItem('Name')
    // }, 0)
    return this.isLoggedIn
  }

  logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('Role')
    localStorage.removeItem('Name')
    this.router.navigate([ 'login' ]);
  }

  addNewHouse() {
    this.router.navigate(['add'])
  }

}