import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfficialComponent } from './official/official.component';
import { AccordionBasicComponent } from './accordion/accordion-basic/accordion-basic.component';
import { AccordionGroupOpeningEventComponent } from './accordion/accordion-group-opening-event/accordion-group-opening-event.component';
import { AccordionCustomHtmlComponent } from './accordion/accordion-custom-html/accordion-custom-html.component';
import { AccordionDisabledComponent } from './accordion/accordion-disabled/accordion-disabled.component';
import { AccordionInitiallyOpenedComponent } from './accordion/accordion-initially-opened/accordion-initially-opened.component';
import { AccordionDynamicComponent } from './accordion/accordion-dynamic/accordion-dynamic.component';
import { AccordionDynamicBadyContentComponent } from './accordion/accordion-dynamic-bady-content/accordion-dynamic-bady-content.component';
import { AccordionManualToggleComponent } from './accordion/accordion-manual-toggle/accordion-manual-toggle.component';
import { AccordionOpenOnlyOneAtATimeComponent } from './accordion/accordion-open-only-one-at-a-time/accordion-open-only-one-at-a-time.component';
import { AccordionStylingComponent } from './accordion/accordion-styling/accordion-styling.component';
import { AccordionConfiguringDefaultsComponent } from './accordion/accordion-configuring-defaults/accordion-configuring-defaults.component';

const appRoutes: Routes = [
  { path: '', component: OfficialComponent },
  { path: 'official', component: OfficialComponent },
  { path: 'accordion/basic', component: AccordionBasicComponent },
  { path: 'accordion/group-opening-event.component', component: AccordionGroupOpeningEventComponent },
  { path: 'accordion/custom-html', component: AccordionCustomHtmlComponent },
  { path: 'accordion/disabled', component: AccordionDisabledComponent },
  { path: 'accordion/initially-opened', component: AccordionInitiallyOpenedComponent },
  { path: 'accordion/dynamic', component: AccordionDynamicComponent },
  { path: 'accordion/dynamic-bady-content', component: AccordionDynamicBadyContentComponent },
  { path: 'accordion/manual-toggle', component: AccordionManualToggleComponent },
  { path: 'accordion/open-only-one-at-a-time', component: AccordionOpenOnlyOneAtATimeComponent },
  { path: 'accordion/styling', component: AccordionStylingComponent },
  { path: 'accordion/configuring-defaults', component: AccordionConfiguringDefaultsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OfficialComponent,
    AccordionBasicComponent,
    AccordionGroupOpeningEventComponent,
    AccordionCustomHtmlComponent,
    AccordionDisabledComponent,
    AccordionInitiallyOpenedComponent,
    AccordionDynamicComponent,
    AccordionDynamicBadyContentComponent,
    AccordionManualToggleComponent,
    AccordionOpenOnlyOneAtATimeComponent,
    AccordionStylingComponent,
    AccordionConfiguringDefaultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
