import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionManualToggleComponent } from './accordion-manual-toggle.component';

describe('AccordionManualToggleComponent', () => {
  let component: AccordionManualToggleComponent;
  let fixture: ComponentFixture<AccordionManualToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionManualToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionManualToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
