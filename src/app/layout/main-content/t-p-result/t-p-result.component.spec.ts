import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TPResultComponent } from './t-p-result.component';

describe('TPResultComponent', () => {
  let component: TPResultComponent;
  let fixture: ComponentFixture<TPResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TPResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TPResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
