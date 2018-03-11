import { Component, OnInit } from '@angular/core';
import { Calculations, WhatToCalculate } from "./../icalculations.type";

@Component({
  selector: 'app-calculate-rectangle',
  templateUrl: './calculate-rectangle.component.html',
  styleUrls: ['./calculate-rectangle.component.css']
})

export class CalculateRectangleComponent implements OnInit, Calculations {

  constructor() { }

  whatToCalculate:WhatToCalculate;

  getArea() {

  }
  getCircumference() {
  	
  }
  
  ngOnInit() {
  }

}
