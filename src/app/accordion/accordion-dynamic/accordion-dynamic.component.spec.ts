import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionDynamicComponent } from './accordion-dynamic.component';

describe('AccordionDynamicComponent', () => {
  let component: AccordionDynamicComponent;
  let fixture: ComponentFixture<AccordionDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
