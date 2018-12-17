import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-initially-opened',
  templateUrl: './accordion-initially-opened.component.html',
  styleUrls: ['./accordion-initially-opened.component.scss']
})
export class AccordionInitiallyOpenedComponent implements OnInit {

  isFirstOpen = true;
  
  constructor() { }

  ngOnInit() {
  }

}
