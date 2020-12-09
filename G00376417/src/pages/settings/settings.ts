import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
	name : string;
	source : string;
	title : string;
	description : string;
	checked : boolean = true;
	constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
		
	} 
	
	ionViewDidLoad() {
		
	}	
	save(){
		this.storage.set("name",this.name); 
		if (this.name == null){
			alert("Please enter a name.");
		}
		this.storage.set("source",this.source);
		this.storage.set("title",this.title);
		this.storage.set("description",this.description);
		
		this.navCtrl.pop();
	}
	ionViewWillEnter(){
		this.storage.get("name")
		.then((data) => {
			this.name = data;	
		})
		.catch((err)=> { alert("Error accessing storage");});
		
		this.storage.get("source")
		.then((data) => {
			if(data == null){
				this.source = "Ireland";
			}else{	
				this.source = data;	
			}	
		})
		.catch((err)=> { alert("Error accessing storage");});
		
		this.storage.get("title")
		.then((data) => {
			if(data == null){
				this.title = "4";
			}else{
				this.title = data;	
			}	
		})
		.catch((err)=> { alert("Error accessing storage");});
		
		this.storage.get("description")
		.then((data) => {
			if(data == null){
				this.description = "3";
			}else{
				this.description = data;
			}		
		})
		.catch((err)=> { alert("Error accessing storage");});	
		
	}
	
}
