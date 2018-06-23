import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  imports:      [ BrowserModule,HttpModule,AgmCoreModule.forRoot({ apiKey:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAZuPX1xWmg-Y8bPEq2PO21UkWfe6EGAPs&libraries=places&callback=initAutocomplete"
  }) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
