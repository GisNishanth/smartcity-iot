import { Component, NgModule,OnInit } from '@angular/core';

@Component({
	selector: 'street-light',
	templateUrl: './streetLight.component.html',
	styleUrls: ['./streetLight.component.css']
})

export class streetlightComponent implements OnInit{
	streetLights;
	constructor(){
		
	}
	getStreetLight(){
    	this.streetLights = {
    		gaugeType :"full",
		    gaugeValue :28.3,
		    gaugeAppendText :"kW/h"
    	}
    }

	ngOnInit(){
		this.getStreetLight();
	}
}