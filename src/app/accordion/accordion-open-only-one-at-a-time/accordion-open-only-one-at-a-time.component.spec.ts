import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionOpenOnlyOneAtATimeComponent } from './accordion-open-only-one-at-a-time.component';

describe('AccordionOpenOnlyOneAtATimeComponent', () => {
  let component: AccordionOpenOnlyOneAtATimeComponent;
  let fixture: ComponentFixture<AccordionOpenOnlyOneAtATimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionOpenOnlyOneAtATimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionOpenOnlyOneAtATimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
