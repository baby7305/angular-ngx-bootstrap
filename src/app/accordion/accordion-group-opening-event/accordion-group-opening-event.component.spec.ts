import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionGroupOpeningEventComponent } from './accordion-group-opening-event.component';

describe('AccordionGroupOpeningEventComponent', () => {
  let component: AccordionGroupOpeningEventComponent;
  let fixture: ComponentFixture<AccordionGroupOpeningEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionGroupOpeningEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionGroupOpeningEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
