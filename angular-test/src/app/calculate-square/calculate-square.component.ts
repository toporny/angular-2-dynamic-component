import { Component, OnInit } from '@angular/core';
import { Calculations, WhatToCalculate } from "./../icalculations.type";

@Component({
  selector: 'app-calculate-square',
  templateUrl: './calculate-square.component.html',
  styleUrls: ['./calculate-square.component.css']
})

export class CalculateSquareComponent implements OnInit, Calculations {

  constructor() { }

  whatToCalculate:WhatToCalculate;
  
  getArea() {

  }
  getCircumference() {
  	
  }

  ngOnInit() {
  }

}
