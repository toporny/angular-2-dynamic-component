### Task:
Make angular 4 application which calculates surface area of three objects:
wheel, square and rectangle. Application has to be easy scalable. We want to add more modules/object/calculations in easy way in future. 

Technology:Angular 2+

View 1:
- Radio button witch calculate choice (area / perimeter),
- combo list with objects choice.

View 2 (next step):
- Form with all inputs (square: 1 input, rectange: 2 inputs and so on..) and result area.

### Solution:
One main "app.component" which only one job is to load necessary components depends of choice (calculate-circle, calculate-rectangle, calculate-square).
Every component contains form and calculation formulas, specific for selected shape. 
More component can be added easily later on.

### How aplication meets "easy scalable" requirement:
1. Each geometric shape has own separated component which is loaded dynamically.
2. Inside component are stored all calculation formulas and drawing functions specific for particular shape. 
3. Each component has to implement apstract class "Calculations" (from  "icalculations.type.ts" file which is de facto interface of all required methods: getArea(), getCircumference() )
4. In "icalculations.type.ts" file radiobutton and select content are defined.
