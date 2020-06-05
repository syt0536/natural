import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalScreeningComponent } from './chemical-screening.component';

describe('ChemicalScreeningComponent', () => {
  let component: ChemicalScreeningComponent;
  let fixture: ComponentFixture<ChemicalScreeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemicalScreeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemicalScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
