import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionInitiallyOpenedComponent } from './accordion-initially-opened.component';

describe('AccordionInitiallyOpenedComponent', () => {
  let component: AccordionInitiallyOpenedComponent;
  let fixture: ComponentFixture<AccordionInitiallyOpenedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionInitiallyOpenedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionInitiallyOpenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
