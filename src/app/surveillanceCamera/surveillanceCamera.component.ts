import { Component, NgModule,OnInit } from '@angular/core';

@Component({
	selector: 'surveillance-camera',
	templateUrl: './surveillanceCamera.component.html',
	styleUrls: ['./surveillanceCamera.component.css']
})

export class surveillanceComponent implements OnInit{

	videoList:Array<any>;
	constructor(){
		this.videoList = [
			{src : "../assets/videos/mov_bbb.mp4"},
			{src : "../assets/videos/jaggos.mp4"},
			{src : "../assets/videos/car.mp4"},
			{src : "../assets/videos/mov_bbb.mp4"},
			{src : "../assets/videos/jaggos.mp4"},
			{src : "../assets/videos/car.mp4"},
			{src : "../assets/videos/mov_bbb.mp4"},
			{src : "../assets/videos/jaggos.mp4"},
			{src : "../assets/videos/car.mp4"},
			{src : "../assets/videos/mov_bbb.mp4"},
			{src : "../assets/videos/jaggos.mp4"},
			{src : "../assets/videos/car.mp4"},
			{src : "../assets/videos/mov_bbb.mp4"},
			{src : "../assets/videos/jaggos.mp4"},
			{src : "../assets/videos/car.mp4"}]
	}

	ngOnInit(){

	}
}