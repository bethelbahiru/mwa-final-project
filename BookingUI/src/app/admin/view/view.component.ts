import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() house: any 
  userName: any;

  constructor() { 
    this.userName = localStorage.getItem('Name')
  }

  ngOnInit(): void {
  }

}
