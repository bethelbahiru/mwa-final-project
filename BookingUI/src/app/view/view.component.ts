import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styles: [
    '.tp-card {height: 350px; min-height: 250px; width: 75%; margin: auto; background-color: #CDCDCD;}',
    '.mat-card-image {width: 300px; height: 300px; float: left; margin-right: 20px; padding-top: 10px; padding-left: 10px;}',
    '.mat-card-content {font-size: 18px; color: #cc3300; font-family: "Courier New", monospace; font-weight: bold;}',
    '.model {color: #4d194d; font-size: 24px; font-family: "Courier New", monospace; font-weight: 900; font-style: italic;}',
    'div.props {float: left; margin-right: 65px; font-family: "OCR A Std", monospace; font-weight: bold;}',
  ]
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
