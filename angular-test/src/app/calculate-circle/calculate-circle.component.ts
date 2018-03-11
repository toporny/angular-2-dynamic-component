import { Component, OnInit } from '@angular/core';
import { Calculations, WhatToCalculate } from "./../icalculations.type";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculate-circle',
  templateUrl: './calculate-circle.component.html',
  styleUrls: ['./calculate-circle.component.css']
})

export class CalculateCircleComponent implements OnInit, Calculations {

  ngOnInit() {
  }

  constructor() { }

  radius: string = '';
  area: string = '';
  circumference: string = '';


  whatToCalculate: WhatToCalculate;

  onEnterA(value: string) {
    this.radius = value;
    this.area = this.getArea();
    this.circumference = this.getCircumference();
  }


  getArea() {
    let result = 3.14159 * parseInt(this.radius) * parseInt(this.radius);
    if (!isNaN(result)) {
      return result.toString()
    }
    return '';
  }

  getCircumference() {
    let result = 2* parseInt(this.radius) * parseInt(this.radius);
    if (!isNaN(result)) {
      return result.toString()
    }
    return '';
  }
 
}
