import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionCustomHtmlComponent } from './accordion-custom-html.component';

describe('AccordionCustomHtmlComponent', () => {
  let component: AccordionCustomHtmlComponent;
  let fixture: ComponentFixture<AccordionCustomHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionCustomHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionCustomHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
