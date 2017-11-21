import { Component, NgModule,OnInit } from '@angular/core';

@Component({
	selector: 'solid-waste',
	templateUrl: './solidWaste.component.html',
	styleUrls: ['./solidWaste.component.css']
})

export class solidWasteComponent implements OnInit{
	solidWaste;
	constructor(){
		
	}
	getSolidWaste(){
    	this.solidWaste = {
    		gaugeType :"full",
		    gaugeValue :50,
		    gaugeAppendText :"ton"
    	}
    }

	ngOnInit(){
		this.getSolidWaste();
	}
}