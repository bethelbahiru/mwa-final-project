import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog'
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent {

  rentHouseForm: FormGroup;
  houseData: any;

  constructor(private formBuilder: FormBuilder, private dialog : MatDialog) {
    this.houseData = history.state.data;
    this.rentHouseForm = formBuilder.group({
      'startDate': ['', Validators.compose([Validators.required])],
      'endDate': ['', Validators.compose([Validators.required])],
      'email': ['', Validators.compose([Validators.required])],
      'billingaddress': ['', Validators.compose([Validators.required])],
      'ownerName': ['', Validators.compose([Validators.required])],
      'cardNum': ['', Validators.compose([Validators.required])],
      'expDate': ['', Validators.compose([Validators.required])],
    }) 
   }


   rent() {
    this.dialog.open(DialogComponent, {data: {rentData: this.rentHouseForm.value} });
   }

}