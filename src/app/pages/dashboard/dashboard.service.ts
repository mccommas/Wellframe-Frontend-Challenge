import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConstantService } from './../../shared/services/constant.service';
import { HttpService } from './../../shared/services/http.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class DashboardService {
    constructor(private httpService: HttpService, private constantService: ConstantService, private http: Http) { }
    getUserDetail = function (parameter) {
        return this.httpService.http_get(this.constantService.getUserDetail + parameter);
    };
    getUserRepoDetail = function (parameter) {
        return this.httpService.http_get(this.constantService.getUserDetail + parameter + this.constantService.userRepoEndParameter);
    };
    getUserStarredDetail = function (parameter) {
        return this.httpService.http_get(this.constantService.getUserDetail + parameter + this.constantService.starredDetailEndParameter);
    };
    getRepoDetails = function (parameter) {
        return this.httpService.http_get(this.constantService.getRepoDetail + parameter + this.constantService.repoEndParameter);
    }
}