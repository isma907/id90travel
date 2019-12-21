import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AgmCoreModule } from '@agm/core';
import { AgmOverlays } from "agm-overlays"

import { PublicRoutingModule } from './public-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';


@NgModule({
  declarations: [LayoutComponent, HomeComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    DateRangePickerModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyCLoRfQvGpwSeM1nDg_pdSYnSBrsU2qgZw'
      apiKey: 'AIzaSyCd0sXnR3Uc6qPUeA7ily_eMvdYRVuI4N8'
      /* apiKey is required, unless you are a 
      premium customer, in which case you can 
      use clientId 
      */
    }),
    AgmOverlays
  ]
})
export class PublicModule { }
