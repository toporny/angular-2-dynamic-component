import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateRectangleComponent } from './calculate-rectangle.component';

describe('CalculateRectangleComponent', () => {
  let component: CalculateRectangleComponent;
  let fixture: ComponentFixture<CalculateRectangleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateRectangleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateRectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
