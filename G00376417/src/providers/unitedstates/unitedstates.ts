import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/*
  Generated class for the UnitedstatesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UnitedstatesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UnitedstatesProvider Provider');
  }
  getData(): Observable<any> {
	return this.http.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=1cd69049a290404b9cea0b7194b9bd35");
  }
}
