import { Component, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { CalculateSquareComponent } from "./calculate-square/calculate-square.component";
import { CalculateRectangleComponent } from "./calculate-rectangle/calculate-rectangle.component";
import { CalculateCircleComponent } from "./calculate-circle/calculate-circle.component";

// Jak aplikacja spełnia warunek o dalszym łatwym rozwoju?
// =======================================================
// 1. Każda figura geoemtryczna ma swój osobny komponent który jest ładowany dynamicznie
// 2. W komponencie są funcje obliczające cechy (obwód, pole, inne mogą być dodane)
//    oraz kod rysujący daną figurę na ekranie
// 3. Każdy nowy komponent musi implementować klasę abstrakcyjną Calculations
//    (z pliku "icalculations.type.ts" który pełni rolę interfejsu)
//    w którym są zdefiniowane nazwy metod które każdy komponent musi obsłużyć
//    [na tym etapie są to: getArea(), getCircumference()])
// 4. w pliku "icalculations.type.ts" są zdefiniowane także zawartości pól radiobutton i select


// definicja możliwych kalkulacji
export enum WhatToCalculate {
    Area,               // pole  - (to bedzie potem traktowane jako stala)
    Circumference,      // obwod - (to bedzie potem traktowane jako stala)
    // tutaj mozna dodac latwo następne..
}


// definicja pola SELECT
export class MyLists {
	getRadioList() {
		return  [
			{ description: 'pole', action: WhatToCalculate.Area},             // pole
			{ description: 'obwód', action: WhatToCalculate.Circumference }   // obwod
			//{ description: 'inna cecha..', action: action: WhatToCalculate.inna_akcja },
		]  
	}
	
	getSelectList() {
		return  [
			{ id: "0", Name: '-- select -- ' },
			{ id: "1", Name: 'koło' },
			{ id: "2", Name: 'kwadrat'},
			{ id: "3", Name: 'prostokąt'},
			//{ id: 4, Name: 'inny np. trójkąt't},
		];	
	}

	getFactoryResolver(componentFactoryResolver, x) {
		let factory;
		switch (x) {
			case "1": //koło
				factory = componentFactoryResolver.resolveComponentFactory(CalculateCircleComponent);
				break;
			case "2": //kwadrat
				factory = componentFactoryResolver.resolveComponentFactory(CalculateSquareComponent);
				break;
			case "3": //prostokąt
				factory = componentFactoryResolver.resolveComponentFactory(CalculateRectangleComponent);
				break;
		}
		return factory
	}
}



export abstract class Calculations {
	whatToCalculate:WhatToCalculate;
	abstract getArea();
	abstract getCircumference();
}

