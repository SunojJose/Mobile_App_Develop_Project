import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/*
  Generated class for the CanadaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CanadaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CanadaProvider Provider');
  }
  getData(): Observable<any> {
	return this.http.get("https://newsapi.org/v2/top-headlines?country=ca&apiKey=1cd69049a290404b9cea0b7194b9bd35");
  }
}
