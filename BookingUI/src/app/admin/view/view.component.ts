import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HouseService } from 'src/app/Services/house.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() house: any 

  constructor(private router: Router, private service: HouseService) { }

  ngOnInit(): void {
  }

  updateHouse() {
    this.router.navigate(['/update'], { state : {data: this.house}})
  }

}
