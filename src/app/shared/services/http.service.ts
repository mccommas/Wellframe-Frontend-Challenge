import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ConstantService } from './constant.service';
import { environment } from '../../../environments/environment';
//This is like a HTTP interceptor
//All HTTP  request in application should go through this layer
@Injectable()
export class HttpService {
  constructor(private http: Http) { }
  http_get(endpoint: string) {
    let header = new Headers();
    header.append("Content-Type", "application/json");
    return this.http.get(endpoint, { headers: header })
      .finally(() => {
      });
  };
}
