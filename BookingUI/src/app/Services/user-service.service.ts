import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signupUser(userData: any){
    return this.http.post('http://localhost:3000/auth/users/signup', userData)
  }

  login(userData: any) {
    return this.http.post('http://localhost:3000/auth/users/login', userData)
  }
}
