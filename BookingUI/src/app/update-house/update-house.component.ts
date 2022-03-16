import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { HouseService } from '../Services/house.service';
import { ButtonService } from '../Services/button-service.service';

@Component({
  selector: 'app-update-house',
  templateUrl: './update-house.component.html',
  styleUrls: ['./update-house.component.css']
})
export class UpdateHouseComponent {
  houseForm!: FormGroup;
  houseData!: any;

  constructor(private formBuilder: FormBuilder, private route: Router, private houseService: HouseService, private buttonService: ButtonService) {
    this.houseData = history.state.data;
    console.log('Id is: ' + this.houseData._id);
  }

  ngOnInit(): void {
    this.houseForm = this.formBuilder.group({
      'ownerName': [this.houseData.ownerName, Validators.compose([Validators.required])],
      'address': [this.houseData.address, Validators.compose([Validators.required])],
      'startDate': [this.houseData.startDate, Validators.compose([Validators.required])],
      'endDate': [this.houseData.endDate, Validators.compose([Validators.required])],
      'maxGuest': [this.houseData.maxGuest, Validators.compose([Validators.required])],
      'bedRoom': [this.houseData.bedRoom, Validators.compose([Validators.required])],
      'bathRoom': [this.houseData.bathRoom, Validators.compose([Validators.required])],     
      'offer': new FormControl(""),
      'checkinType': [this.houseData.checkinType, Validators.compose([Validators.required])],
      'picture': [this.houseData.picture, Validators.compose([Validators.required])],
      'description': [this.houseData.description, Validators.compose([Validators.required])],
      'price': [this.houseData.price, Validators.compose([Validators.required, Validators.min(0)])]
    })

    console.log('Form ---> ', this.houseForm)
  }

  updateHouse() {
    this.houseForm.value._id = this.houseData._id;
    console.log(this.houseForm.value)
    this.houseService.updateHouse(this.houseForm.value).subscribe((data: any) => {
      console.log(`Updated Data ---> ${data}`)
      alert("House detail updated successfully!")
      this.route.navigate(['admin'])  
    });
      
  }

}