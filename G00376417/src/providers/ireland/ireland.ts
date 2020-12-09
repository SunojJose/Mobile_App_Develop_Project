import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/*
  Generated class for the IrelandProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IrelandProvider {

  constructor(public http: HttpClient) {
    console.log('Hello IrelandProvider Provider');
  }
  getData(): Observable<any> {
	return this.http.get("https://newsapi.org/v2/top-headlines?country=ie&apiKey=1cd69049a290404b9cea0b7194b9bd35");
  }

}
