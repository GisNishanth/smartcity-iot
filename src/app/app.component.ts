import { Component, NgModule } from '@angular/core';

// import { DirectionsMapDirective } from './libs/directives/google-map.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	 
  title = 'IOT- MANAGEMENT';
  time = new Date();
  gridsterOptions : any;
  widgets: Array<any>;
  countries:Array<any>;
  selectedCountry;
  
  public origin :any ; // its a example aleatory position
  public destination : any; // its a example aleatory position
  
  


	constructor() {

	  this.countries = [
	     {id:"1", zone:'Zone1' },
	     {id:"2", zone:'Zone2' },
	     {id:"3", zone:'Zone3' },
	     {id:"4", zone:'Zone4' },
	     {id:"5", zone:'Zone5' }
	  ];

		this.widgets= [
	        {
	            x: 0, y: 0,
	            w: 3, h: 1,
	            dragAndDrop: true,
	            resizable: true,
	            title: 'Surveillance Camera'
	        },
	        {
	            x: 1, y: 0, w: 1, h: 1,
	            dragAndDrop: true,
	            resizable: true,
	            title: 'Emergency Alert'
	        },
	        {
	            x: 1, y: 1, w: 1, h: 1,
	            dragAndDrop: true,
	            resizable: true,
	            title: 'Environment Alert'
	        },
	        {
	            x: 3, y: 1, w: 1, h: 1,
	            dragAndDrop: true,
	            resizable: true,
	            title: 'Street Light'
	        },
	        {
	            w: 1, h: 1,
	            dragAndDrop: true,
	            resizable: true,
	            title: 'Solid Waste'
	        },
	        {
	            w: 1, h: 1,
	            dragAndDrop: true,
	            resizable: true,
	            title: 'Kiosk Management'
	        },
	        {
	            w: 2, h: 1,
	            dragAndDrop: true,
	            resizable: true,
	            title: 'Parking Area'
	        },
	        {
	            w: 2, h: 1,
	            dragAndDrop: true,
	            resizable: true,
	            title: 'Live Street Routes'
	        }
    	];

       this.gridsterOptions = {
   		// core configuration is default one - for smallest view. It has hidden minWidth: 0.
        lanes: 2, // amount of lanes (cells) in the grid
        direction: 'vertical', // floating top - vertical, left - horizontal
        floating: true,
        dragAndDrop: true, // enable/disable drag and drop for all items in grid
        resizable: true, // enable/disable resizing by drag and drop for all items in grid
        widthHeightRatio: 1, // proportion between item width and height
        shrink: true,
        useCSSTransforms: true,
        responsiveView: true, // turn on adopting items sizes on window resize and enable responsiveOptions
        responsiveDebounce: 500, // window resize debounce time
        // List of different gridster configurations for different breakpoints.
        // Each breakpoint is defined by name stored in "breakpoint" property. There is fixed set of breakpoints
        // available to use with default minWidth assign to each.
        // - sm: 576 - Small devices
        // - md: 768 - Medium devices
        // - lg: 992 - Large devices
        // - xl: 1200 - Extra large
        // MinWidth for each breakpoint can be overwritten like it's visible below.
        // ResponsiveOptions can overwrite default configuration with any option available.
        responsiveOptions: [
	            {
	                breakpoint: 'sm',
	                // minWidth: 480,
	                lanes: 3
	            },
	            {
	                breakpoint: 'md',
	                minWidth: 768,
	                lanes: 4
	            },
	            {
	                breakpoint: 'lg',
	                minWidth: 1250,
	                lanes: 6
	            },
	            {
	                breakpoint: 'xl',
	                minWidth: 1800,
	                lanes: 8
	            }
	        ]
		};
		

    }

    ngOnInit(){
    
    }

    zoneChange(id){
    	alert(id);
    }

    
    

   
	

    //Enable or Disable the resize or dragable or floating options
    gridsterOptionChange(name,value){
    	if (name === 'dragAndDrop') {
                this.gridsterOptions.dragAndDrop = value;
        }
        if (name === 'resizable') {
            this.gridsterOptions.resizable = value;
        }

        if (name === 'floating') {
            this.gridsterOptions.floating = value;
        }
        return this;
    }



}
