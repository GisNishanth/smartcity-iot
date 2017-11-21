import { Component, NgModule,OnInit } from '@angular/core';

@Component({
	selector: 'environment-alert',
	templateUrl: './environmentAlert.component.html',
	styleUrls: ['./environmentAlert.component.css']
})

export class environmentAlertComponent implements OnInit{
	pressure = {};
	  Co;
	  Co2;
	  No2;
	  max;
	constructor(){
		
	}

	getEnvAlerts(){
		this.pressure = {
			  min: 0,
			  title: 'Pressure',
			  value:20
		};
		// this.pressure.value = 0;
		this.Co = {
			  min: 0,
			  title: 'Co',
			  value:30
		};
		this.Co2 = {
			  min: 0,
			  title: 'Co2',
			  value:50
		};
		this.No2 = {
			  min: 0,
			  title: 'No2',
			  value:90
		};
		this.max = 100;

		//  setInterval(function(){
		// 		 	this.pressure = {
		// 				  min: 0,
		// 				  title: 'Pressure',
		// 				  value: Math.floor(Math.random() * 100) + 1
		// 			};
		// 			console.log(this.pressure);
		// }, 10000);
	}

	ngOnInit(){
		this.getEnvAlerts();
	}
}