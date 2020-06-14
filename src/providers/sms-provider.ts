import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from "rxjs/operators"; 

@Injectable()
export class SmsProvider {
	server: string = "https://telmotestserver.website/brixy_sms/"; // server address

	constructor(public http : Http) {

	}

	smsData(body, file){
		let type = "application/json; charset=UTF-8";
		let headers = new Headers({ 'Content-Type': type });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(this.server + file, JSON.stringify(body), options)
		.pipe(map(res => res.json()));
	}
}