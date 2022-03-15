import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonService } from '../Services/button-service.service';
import { HouseService } from '../Services/house.service';

@Component({
  selector: 'app-add-house-component',
  templateUrl: './add-house-component.component.html',
  styleUrls: ['./add-house-component.component.css']
})
export class AddHouseComponent {

  addHouseForm: FormGroup;
  Vehicles: any[] = [
    { value: "Wifi" },
    { value: "Air Conditioning"},
    { value: "Parking Lot"},
    { value: "Washer"}
  ];
  

  constructor(private formBuilder: FormBuilder, private route: Router, private houseService: HouseService, private buttonService: ButtonService) {
    this.addHouseForm = formBuilder.group({
      'address': ['', Validators.compose([Validators.required])],
      'startDate': ['', Validators.compose([Validators.required])],
      'endDate': ['', Validators.compose([Validators.required])],
      'maxGuest': ['', Validators.compose([Validators.required])],
      'bedRoom': ['', Validators.compose([Validators.required])],
      'bathRoom': ['', Validators.compose([Validators.required])],
     // 'available': [true, Validators.compose([Validators.required])],
      //'offer': ['', Validators.compose([Validators.required])],
       'offer': new FormControl(""),
      'checkinType': ['', Validators.compose([Validators.required])],
      'picture': ['', Validators.compose([Validators.required])],
      'description': ['', Validators.compose([Validators.required])],
      'price': ['', Validators.compose([Validators.required])]

    })
   
    this.buttonService.showbutton = true
   }

  addNew(){
    console.log(this.addHouseForm.value);
    this.houseService.addHouse(this.addHouseForm.value).subscribe((data: any) => {
      console.log(data)
    })
  }
  changeEvent(event:any) {

  }

  setOffers()
  {
        const control=this.addHouseForm.get('offer');
        if (control)
          control.setValue(this.Vehicles.filter(x=>x.active).map(x=>x.value))
  }

}
