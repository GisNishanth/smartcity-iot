import { Component, NgModule,OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
@Component({
	selector: 'livecity-route',
	templateUrl: './livecityRoute.component.html',
	styleUrls: ['./livecityRoute.component.css']
})

export class livecityRouteComponent implements OnInit{
	lat;
	lng;
	constructor(){
		this.lat = 51.678418;
  	    this.lng = 78.1197634;
	}

	ngOnInit(){

	}
}