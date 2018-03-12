import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateCircleComponent } from './calculate-circle.component';

describe('CalculateCircleComponent', () => {
  let component: CalculateCircleComponent;
  let fixture: ComponentFixture<CalculateCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
