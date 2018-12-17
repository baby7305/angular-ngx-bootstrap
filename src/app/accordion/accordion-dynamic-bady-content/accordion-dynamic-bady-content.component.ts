import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-dynamic-bady-content',
  templateUrl: './accordion-dynamic-bady-content.component.html',
  styleUrls: ['./accordion-dynamic-bady-content.component.scss']
})
export class AccordionDynamicBadyContentComponent implements OnInit {

  items = ['Item 1', 'Item 2', 'Item 3'];

  addItem(): void {
    this.items.push(`Item ${this.items.length + 1}`);
  }

  constructor() { }

  ngOnInit() {
  }

}
