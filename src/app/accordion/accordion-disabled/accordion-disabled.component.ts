import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-disabled',
  templateUrl: './accordion-disabled.component.html',
  styleUrls: ['./accordion-disabled.component.scss']
})
export class AccordionDisabledComponent implements OnInit {

  isFirstDisabled = false;

  constructor() { }

  ngOnInit() {
  }

}
