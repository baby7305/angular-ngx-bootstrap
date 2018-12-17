import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionStylingComponent } from './accordion-styling.component';

describe('AccordionStylingComponent', () => {
  let component: AccordionStylingComponent;
  let fixture: ComponentFixture<AccordionStylingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionStylingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
