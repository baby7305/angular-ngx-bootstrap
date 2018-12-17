import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-styling',
  templateUrl: './accordion-styling.component.html',
  styleUrls: ['./accordion-styling.component.scss']
})
export class AccordionStylingComponent implements OnInit {

  customClass: string = 'customClass';
  isFirstOpen: boolean = true

  constructor() { }

  ngOnInit() {
  }

}
