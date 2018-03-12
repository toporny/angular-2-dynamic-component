import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateSquareComponent } from './calculate-square.component';

describe('CalculateSquareComponent', () => {
  let component: CalculateSquareComponent;
  let fixture: ComponentFixture<CalculateSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
