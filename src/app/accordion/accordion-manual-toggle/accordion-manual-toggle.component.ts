import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-manual-toggle',
  templateUrl: './accordion-manual-toggle.component.html',
  styleUrls: ['./accordion-manual-toggle.component.scss']
})
export class AccordionManualToggleComponent implements OnInit {

  isOpen = true;

  constructor() { }

  ngOnInit() {
  }

}
