import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuotesProvider } from '../../providers/quotes/quotes';
import { NewsPage } from '../news/news';
import { SettingsPage } from '../settings/settings';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	data : string[];
	name : string;
	source : string;
	title : string;
	description : string;
	constructor(public navCtrl: NavController, private qts: QuotesProvider, private storage: Storage) {
		
	}
	ionViewDidLoad() {
		this.qts.getData().subscribe(data =>{
			this.data = data.contents.quotes});
			
	}
	openSettings() {
		this.navCtrl.push(SettingsPage);
	}
	openNews() {
		
		this.navCtrl.push(NewsPage,{source:this.source, title:this.title, description:this.description});
	}
	ionViewWillEnter(){
		this.storage.get("name")
		.then((data) => {
			this.name = data;	
		})
		.catch((err)=> { alert("Error accessing storage");});
		
		
		this.storage.get("source")
		.then((data) => {
			this.source = data;	
		})
		.catch((err)=> { alert("Error accessing storage");});
		
		this.storage.get("title")
		.then((data) => {
			this.title = data;	
		})
		.catch((err)=> { alert("Error accessing storage");});
		
		this.storage.get("description")
		.then((data) => {
			this.description = data;	
		})
		.catch((err)=> { alert("Error accessing storage");});	
		
		
	}
	
}
