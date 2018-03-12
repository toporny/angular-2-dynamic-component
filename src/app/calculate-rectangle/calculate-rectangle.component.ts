import { Component, OnInit, ElementRef, AfterViewInit, ViewChild} from '@angular/core';
import { Calculations, WhatToCalculate } from "./../icalculations.type";

@Component({
  selector: 'app-calculate-rectangle',
  templateUrl: './calculate-rectangle.component.html',
  styleUrls: ['./calculate-rectangle.component.css']
})

export class CalculateRectangleComponent implements OnInit, Calculations {

  ngOnInit() {
  }

  constructor() { }

  a: string = '';
  b: string = '';
  area: string = '';
  circumference: string = '';


  whatToCalculate:WhatToCalculate;

  onEnterA(value: string) {
    this.a = value;
    this.area = this.getArea();
    this.circumference = this.getCircumference();
  }

  onEnterB(value: string) {
    this.b = value;
    this.area = this.getArea();
    this.circumference = this.getCircumference();
  }

 
  getArea() {
    let result = parseInt(this.a) * parseInt(this.b);
    if (!isNaN(result)) {
      return result.toString()
    }
    return '';
  }

  getCircumference() {
    let result = 2*(parseInt(this.a) + parseInt(this.b));
    if (!isNaN(result)) {
      return result.toString()
    }
    return '';
  }
 
}
