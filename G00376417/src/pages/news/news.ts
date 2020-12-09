import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IrelandProvider } from '../../providers/ireland/ireland';
import { UnitedstatesProvider } from '../../providers/unitedstates/unitedstates';
import { CanadaProvider } from '../../providers/canada/canada';
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
	
	source : string;
	title : string;
	description : string;	
	news: string[];
	
	constructor(public navCtrl: NavController, public navParams: NavParams, private ir : IrelandProvider, private us : UnitedstatesProvider , private ca : CanadaProvider) {
		
	}
	
	ionViewDidLoad() {
		console.log('ionViewDidLoad NewsPage'); 
		this.source = this.navParams.get('source');
		this.title = this.navParams.get('title');
		this.description = this.navParams.get('description');
		
		if (this.source == null){ 
			this.source = "Ireland";
		}
		if (this.title == null) {
			this.title = "4";
		} 
		if (this.description == null){
			this.description = "3";
		}
		
		switch(this.source){
			case "Ireland":{
				this.ir.getData().subscribe(data =>{
				this.news = data.articles});
				break;
			}
			case "United States":{
				this.us.getData().subscribe(data =>{
				this.news = data.articles});
				break;
			}
			case "Canada":{
				this.ca.getData().subscribe(data =>{
				this.news = data.articles});
				break;
			}
		
		}	
		
	}
	
}
