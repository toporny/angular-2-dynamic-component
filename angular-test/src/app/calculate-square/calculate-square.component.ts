import { Component, OnInit } from '@angular/core';
import { Calculations } from "./../icalculations.type";

@Component({
  selector: 'app-calculate-square',
  templateUrl: './calculate-square.component.html',
  styleUrls: ['./calculate-square.component.css']
})
export class CalculateSquareComponent implements OnInit, Calculations {

  constructor() { }
  
  getArea() {

  }
  getCircumference() {
  	
  }

  ngOnInit() {
  }

}
