import { Component } from '@angular/core';
/*
Poniżej szczegóły:
Zadanie: Stworzenie aplikacji obliczającej pole i obwód trzech figur: koło, kwadrat, prostokąt. Powinna być przygotowana w sposób umożlwiający dalszy rozwój, poprzez dodanie kolejnych typów obliczeń oraz figur.  Technologia: Preferowany Angular 2+

Widok 1:  Radio button z wyborem obliczeń (pole / obwód), Lista combo z wyborem figury. Widok 2 (po wyborze figury): Formularz z polami potrzebnymi do obliczeń (np. promień / długość boków),  pole zawierające wynik obliczeń.
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular test';

	lUsers: any[] = [
		{ id: 1, Name: 'wheel' },    // 2*pi*R
		{ id: 2, Name: 'square'},    // a*a
		{ id: 3, Name: 'rectangle'}, // a*b
		{ id: 4, Name: 'triangle'}   // 0.5*a*h

	];
	curUser: any = this.lUsers[0]; // first will be selected by default by browser


}
