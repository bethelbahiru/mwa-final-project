import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HouseService } from 'src/app/Services/house.service';
import { UserService } from 'src/app/Services/user-service.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() house: any 
  userName: any;

  constructor(private router: Router, private service: HouseService) { 
    this.userName = localStorage.getItem('Name')
  }

  ngOnInit(): void {
  }

  updateHouse() {
    this.router.navigate(['/update'], { state : {data: this.house}})
  }

}
