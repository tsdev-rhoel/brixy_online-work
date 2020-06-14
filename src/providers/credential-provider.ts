import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from "rxjs/operators"; 

@Injectable()
export class PostProvider {
	server: string = "https://www.telmotestserver.website/brixy-live/server_api/"; // server address https://www.telmotestserver.website/brixy-live/server_api/ http://localhost/server_api/

	constructor(public http : Http) {

	}

	postData(body, file){
		let type = "application/json; charset=UTF-8";
		let headers = new Headers({ 'Content-Type': type });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(this.server + file, JSON.stringify(body), options)
		.pipe(map(res => res.json()));
	}
}