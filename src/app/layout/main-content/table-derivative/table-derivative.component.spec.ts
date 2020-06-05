import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDerivativeComponent } from './table-derivative.component';

describe('TableDerivativeComponent', () => {
  let component: TableDerivativeComponent;
  let fixture: ComponentFixture<TableDerivativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDerivativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDerivativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
