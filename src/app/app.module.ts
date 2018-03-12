import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CalculateSquareComponent } from './calculate-square/calculate-square.component';
import { CalculateRectangleComponent } from './calculate-rectangle/calculate-rectangle.component';
import { CalculateCircleComponent } from './calculate-circle/calculate-circle.component';
//import { CalculateShapeComponent } from './calculate-shape/calculate-shape.component';


@NgModule({
  declarations: [ AppComponent, CalculateSquareComponent, CalculateRectangleComponent, CalculateCircleComponent ],
  imports: [BrowserModule, FormsModule],
  entryComponents: [AppComponent, CalculateSquareComponent, CalculateRectangleComponent, CalculateCircleComponent ], //, CalculateWheelComponent, CalculateShapeComponent
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
