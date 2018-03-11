import { Component, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { CalculateSquareComponent } from "./calculate-square/calculate-square.component";
import { CalculateRectangleComponent } from "./calculate-rectangle/calculate-rectangle.component";
import { CalculateCircleComponent } from "./calculate-circle/calculate-circle.component";
import { Calculations, WhatToCalculate } from "./icalculations.type";



/*
Poniżej szczegóły:
Zadanie: Stworzenie aplikacji obliczającej pole i obwód trzech figur:
koło, kwadrat, prostokąt.
Powinna być przygotowana w sposób umożlwiający dalszy rozwój,
poprzez dodanie kolejnych typów obliczeń oraz figur.
Technologia: Preferowany Angular 2+

Widok 1:
- Radio button z wyborem obliczeń (pole / obwód),
- Lista combo z wyborem figury.

Widok 2 (po wyborze figury):
Formularz z polami potrzebnymi do obliczeń (np. promień / długość boków),
pole zawierające wynik obliczeń.
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 

export class AppComponent {

	title = 'angular test';

	selectedEntry: { [key: string]: any } = {
		value: null,
		description: null
	};
	whatToCalculate: WhatToCalculate;
	currentShape: "0";

	entries = [];

  	ngOnInit() {
		this.entries = [
			{ id: 1, description: 'pole', action: WhatToCalculate.Area}, // pole
			{ id: 2, description: 'obwód', action: WhatToCalculate.Circumference },  //obwód
			//{ id: 3, description: 'inna figura..', action: 'inna akcja' },
		];
		
		if(this.entries) {
			this.onSelectionChange(this.entries[0]);   // select the first one
		}
	}


    onSelectionChange(entry) {
		this.whatToCalculate = entry.action;
   		this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
   		console.log(this.selectedEntry);
    	this.changeShape(this.currentShape);
    }


	lShapes: any[] = [
		{ id: 0, Name: '-- select -- ', calcComponent: null },
		{ id: 1, Name: 'koło' , calcComponent: CalculateCircleComponent},
		{ id: 2, Name: 'kwadrat' ,calcComponent: CalculateSquareComponent },
		{ id: 3, Name: 'prostokąt', calcComponent: CalculateRectangleComponent},
		//{ id: 4, Name: 'triangle', calcComponent: CalculateTriangleComponent},
	];

	curUser: any = this.lShapes[0]; // first will be selected by default by browser

	constructor (private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef)
	{
		//const childComponent = this.componentFactoryResolver.resolveComponentFactory(CalculateWheelComponent); 
	}


	changeShape(x) {
		this.currentShape = x;
		this.viewContainerRef.clear();
		//console.log(this.selectedEntry);
		let factory;
		let componentRef;
		if (x > 0) {
			switch (x) {
				case "1": //koło
					factory = this.componentFactoryResolver.resolveComponentFactory(CalculateCircleComponent);
					break;
				case "2": //kwadrat
					factory = this.componentFactoryResolver.resolveComponentFactory(CalculateSquareComponent);
					break;
				case "3": //prostokąt
					factory = this.componentFactoryResolver.resolveComponentFactory(CalculateRectangleComponent);
					break;
			}
			componentRef = this.viewContainerRef.createComponent(factory);
			componentRef.instance.whatToCalculate  = this.whatToCalculate;
		}
	}
}
