import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-group-opening-event',
  templateUrl: './accordion-group-opening-event.component.html',
  styleUrls: ['./accordion-group-opening-event.component.scss']
})
export class AccordionGroupOpeningEventComponent implements OnInit {

  log(event: boolean) {
    console.log(`Accordion has been ${event ? 'opened' : 'closed'}`);
  }

  constructor() { }

  ngOnInit() {
  }

}
