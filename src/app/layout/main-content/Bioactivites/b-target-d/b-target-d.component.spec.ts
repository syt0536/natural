import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BTargetDComponent } from './b-target-d.component';

describe('BTargetDComponent', () => {
  let component: BTargetDComponent;
  let fixture: ComponentFixture<BTargetDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BTargetDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BTargetDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
