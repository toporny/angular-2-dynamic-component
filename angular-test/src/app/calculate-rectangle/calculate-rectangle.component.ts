import { Component, OnInit } from '@angular/core';
import { Calculations } from "./../icalculations.type";
@Component({
  selector: 'app-calculate-rectangle',
  templateUrl: './calculate-rectangle.component.html',
  styleUrls: ['./calculate-rectangle.component.css']
})
export class CalculateRectangleComponent implements OnInit, Calculations {

  constructor() { }


  getArea() {

  }
  getCircumference() {
  	
  }
  
  ngOnInit() {
  }

}
