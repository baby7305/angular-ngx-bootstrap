import { Component, OnInit } from '@angular/core';
import { AccordionConfig } from 'ngx-bootstrap/accordion';

// such override allows to keep some initial values

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}

@Component({
  selector: 'app-accordion-configuring-defaults',
  templateUrl: './accordion-configuring-defaults.component.html',
  styleUrls: ['./accordion-configuring-defaults.component.scss'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class AccordionConfiguringDefaultsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
