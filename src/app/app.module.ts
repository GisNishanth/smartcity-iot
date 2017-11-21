import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GridsterModule } from 'angular2gridster';
import { NgxGaugeModule } from 'ngx-gauge';
import { AgmCoreModule } from '@agm/core';
// import { DirectionsMapDirective } from './libs/directives/google-map.directive';
import { JustgageModule } from 'angular2-justgage';



import { AppComponent } from './app.component';
import { surveillanceComponent } from './surveillanceCamera/surveillanceCamera.component';
import { emergencyAlertComponent } from './emergencyAlert/emergencyAlert.component';
import { environmentAlertComponent } from './environmentAlert/environmentAlert.component';
import { streetlightComponent } from './streetlight/streetlight.component';
import { solidWasteComponent } from './solidWaste/solidWaste.component';
import { kioskManagementComponent } from './kioskManagement/kioskManagement.component';
import { parkingAreaComponent } from './parkingArea/parkingArea.component';
import { livecityRouteComponent } from './livecityRoute/livecityRoute.component';


@NgModule({
  declarations: [
    AppComponent,
    surveillanceComponent,
    emergencyAlertComponent,
    environmentAlertComponent,
    streetlightComponent,
    solidWasteComponent,
    kioskManagementComponent,
    parkingAreaComponent,
    livecityRouteComponent
  ],
  imports: [
    BrowserModule,
    GridsterModule,
    FormsModule,
    NgxGaugeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBnX83oxBuvSA51q9KR8OFpCWjwMfo0sCk'
    }),
    JustgageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
