import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private http: HttpClient) {
    
   }

  addHouse(houseData: any) {
    return this.http.post('http://localhost:3000/api/admin/add', houseData)
  }
}