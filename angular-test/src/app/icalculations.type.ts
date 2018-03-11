

export enum WhatToCalculate {
    Area,
    Circumference,
}


export abstract class Calculations {
	/**
	* Returns a list of all of the current user's todos.
	*/
	whatToCalculate:WhatToCalculate;

	abstract getArea();
	abstract getCircumference();

}

