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

  getHouses() {
    return this.http.get('http://localhost:3000/api/admin/houses')
  }

  updateHouse(houseData: any) {
    return this.http.put('http://localhost:3000/api/admin/update', houseData)
  }

  deleteHouse(houseData: any) {
    return this.http.post('http://localhost:3000/api/admin/delete', houseData)
  }
}