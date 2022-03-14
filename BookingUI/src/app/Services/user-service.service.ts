import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { InjectionToken } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedIn: boolean = false


  constructor(private http: HttpClient) { }

  signupUser(userData: any){
    return this.http.post('http://localhost:3000/auth/users/signup', userData)
  }

  login(userData: any) {
    return this.http.post('http://localhost:3000/auth/users/login', userData)
  }

  isLoggedIn(): boolean{
   const c = localStorage.getItem('Token')
   if(c)
   this.loggedIn = true
   else
   this.loggedIn = false
   return this.loggedIn
  }


}
