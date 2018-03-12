import { Component, OnInit } from '@angular/core';
import { Calculations, WhatToCalculate } from "./../icalculations.type";

@Component({
  selector: 'app-calculate-square',
  templateUrl: './calculate-square.component.html',
  styleUrls: ['./calculate-square.component.css']
})

export class CalculateSquareComponent implements OnInit, Calculations {

  ngOnInit() {
  }

  constructor() { }

  side: string = '';
  area: string = '';
  circumference: string = '';


  whatToCalculate:WhatToCalculate;

  onEnterSide(value: string) {
    this.side = value;
    this.area = this.getArea();
    this.circumference = this.getCircumference();
  }

 
  getArea() {
    let result = parseInt(this.side) * parseInt(this.side);
    if (!isNaN(result)) {
      return result.toString()
    }
    return '';
  }

  getCircumference() {
    let result = 2*(parseInt(this.side) + parseInt(this.side));
    if (!isNaN(result)) {
      return result.toString()
    }
    return '';
  }
 
}
