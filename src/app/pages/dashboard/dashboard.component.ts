import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { HttpService } from './../../shared/services/http.service';
import { UIRouter } from 'ui-router-ng2';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService, HttpService]
})
export class DashboardComponent implements OnInit {
  username: string;
  userDetail: any;
  repoDetails: any;
  starredRepo: any;
  routeParameters: any;
  constructor(private dashboardService: DashboardService, private uiRouter: UIRouter) {
    this.routeParameters = this.uiRouter.globals.params;
    if (this.routeParameters.username) {
      this.username = this.routeParameters.username + (this.routeParameters.repo ? "/" + this.routeParameters.repo : "");
      this.getRequiredData();
    }
  }

  ngOnInit() {
  }

  getUserStarredDetail() {
    this.dashboardService.getUserStarredDetail(this.username).map(r => r.json())
      .subscribe(data => {
        this.starredRepo = data;
      });
  }
  getUserDetail() {
    if (this.username) {
      this.dashboardService.getUserDetail(this.username).map(r => r.json())
        .subscribe(data => {
          this.userDetail = data;
        });
      this.getUserStarredDetail();
    }
  }

  getRepoDetail() {
    if (this.username) {
      this.dashboardService.getRepoDetails(this.username).map(r => r.json())
        .subscribe(data => {
          this.repoDetails = data;
        });
    }
  }

  getRequiredData() {
    if (this.routeParameters.repo) {
      this.getRepoDetail();
    } else {
      this.getUserDetail();
    }
  }

  exploreNow() {
    if (this.username) {
      this.uiRouter.stateService.go('user', { username: this.username });
    } else {
      alert("Please enter username or repositry full name");
    }
  }
}
