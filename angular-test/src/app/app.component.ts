import { Component, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { CalculateSquareComponent } from "./calculate-square/calculate-square.component";
import { CalculateRectangleComponent } from "./calculate-rectangle/calculate-rectangle.component";
import { CalculateCircleComponent } from "./calculate-circle/calculate-circle.component";
import { Calculations, WhatToCalculate, MyLists } from "./icalculations.type";



/*
Zadanie:
========
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

/*
Rozwiązanie:
============
Jeden główny "app.component", który ładuje stosowne komponenty
w zależności od konieczności (calculate-circle, calculate-rectangle, calculate-square),
Każdy komponent ma formularz specyficzny dla danej figury oraz robi obliczenia.
Inne komponenty mogą być dodane potem.


Jak aplikacja spełnia warunek o dalszym łatwym rozwoju?
=======================================================
1. Każda figura geoemtryczna ma swój osobny komponent który jest ładowany dynamicznie
2. W komponencie są funcje obliczające cechy (obwód, pole, inne mogą być dodane)
   oraz kod rysujący daną figurę na ekranie
3. Każdy nowy komponent musi implementować klasę abstrakcyjną Calculations
   (z pliku "icalculations.type.ts" który pełni rolę interfejsu)
   w którym są zdefiniowane nazwy metod które każdy komponent musi obsłużyć
   [na tym etapie są to: getArea(), getCircumference()])
4. w pliku "icalculations.type.ts" są zdefiniowane także zawartości pól radiobutton i select

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
	myLists = new MyLists();

  	ngOnInit() {
		this.entries =	this.myLists.getRadioList();
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


	lShapes: any[] = this.myLists.getSelectList();
	curUser: any = this.lShapes[0]; // first will be selected by default by browser
	constructor (private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {}

	changeShape(x) {
		this.currentShape = x;
		this.viewContainerRef.clear();
		let factory;
		let componentRef;

		if (x > 0) {
			factory = this.myLists.getFactoryResolver(this.componentFactoryResolver, x);
			componentRef = this.viewContainerRef.createComponent(factory);
			componentRef.instance.whatToCalculate  = this.whatToCalculate;
		}
	}
}
