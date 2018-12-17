import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-dynamic',
  templateUrl: './accordion-dynamic.component.html',
  styleUrls: ['./accordion-dynamic.component.scss']
})
export class AccordionDynamicComponent implements OnInit {

  groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  addGroupItem(): void {
    this.groups.push({
      title: `Dynamic Group Header - ${this.groups.length + 1}`,
      content: `Dynamic Group Body - ${this.groups.length + 1}`
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
