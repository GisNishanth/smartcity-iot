import { Component, NgModule,OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
	selector: 'parking-area',
	templateUrl: './parkingArea.component.html',
	styleUrls: ['./parkingArea.component.css']
})

export class parkingAreaComponent implements OnInit{
	lat;
	lng;
	markers;
	constructor(){
		this.lat = 51.678418;
  	    this.lng = 78.1197634;
		this.markers = [
			  {
				  lat: 51.673858,
				  lng: 7.815982,
				  label: 'A',
				  draggable: true
			  },
			  {
				  lat: 51.373858,
				  lng: 7.215982,
				  label: 'B',
				  draggable: false
			  },
			  {
				  lat: 51.723858,
				  lng: 7.895982,
				  label: 'C',
				  draggable: true
			  }
		  ];
	}

	ngOnInit(){

	}
}