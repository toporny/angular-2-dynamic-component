import { Component, OnInit } from '@angular/core';
import { Calculations } from "./../icalculations.type";


@Component({
  selector: 'app-calculate-circle',
  templateUrl: './calculate-circle.component.html',
  styleUrls: ['./calculate-circle.component.css']
})

export class CalculateCircleComponent implements OnInit, Calculations {

  constructor() { }

  getArea() {

  }
  getCircumference() {
  	
  }

  ngOnInit() {
  }

 

}
