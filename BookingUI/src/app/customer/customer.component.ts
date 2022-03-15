import { Component, OnInit } from '@angular/core';
import { HouseService } from '../Services/house.service';

@Component({
  selector: 'app-admin',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  houses: any = [];
  
  constructor(private houseSercice: HouseService) { }

  ngOnInit(): void {
    this.houseSercice.getHouses().subscribe((data)=> {
      this.houses = data
      console.log(this.houses)
    }, (error)=> {
      console.log(error)
    })
  }

}
