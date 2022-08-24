import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LocationComponent } from '../location/location.component';
import { ThingsComponent } from '../things/things.component';
import { DevicesComponent } from '../devices/devices.component';
import { SensorsComponent } from '../sensors/sensors.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, LocationComponent, ThingsComponent, DevicesComponent, SensorsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
