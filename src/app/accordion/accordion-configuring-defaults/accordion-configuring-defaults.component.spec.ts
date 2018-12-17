import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionConfiguringDefaultsComponent } from './accordion-configuring-defaults.component';

describe('AccordionConfiguringDefaultsComponent', () => {
  let component: AccordionConfiguringDefaultsComponent;
  let fixture: ComponentFixture<AccordionConfiguringDefaultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionConfiguringDefaultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionConfiguringDefaultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
