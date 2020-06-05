import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivativeComponent } from './derivative.component';

describe('DerivativeComponent', () => {
  let component: DerivativeComponent;
  let fixture: ComponentFixture<DerivativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerivativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerivativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
