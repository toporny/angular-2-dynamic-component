import { Component, OnInit } from '@angular/core';
import { Calculations, WhatToCalculate } from "./../icalculations.type";

@Component({
  selector: 'app-calculate-circle',
  templateUrl: './calculate-circle.component.html',
  styleUrls: ['./calculate-circle.component.css']
})

export class CalculateCircleComponent implements OnInit, Calculations {

  constructor() { }

  whatToCalculate:WhatToCalculate;

  getArea() {

  }
  getCircumference() {
  	
  }

  ngOnInit() {
  }

}
