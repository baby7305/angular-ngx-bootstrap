import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionDynamicBadyContentComponent } from './accordion-dynamic-bady-content.component';

describe('AccordionDynamicBadyContentComponent', () => {
  let component: AccordionDynamicBadyContentComponent;
  let fixture: ComponentFixture<AccordionDynamicBadyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionDynamicBadyContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionDynamicBadyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
