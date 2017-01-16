import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UIRouter, UIRouterModule, StateRegistry } from 'ui-router-ng2';
import { MyUiRouterConfigService } from './shared/services/my-ui-router-config.service';
import { GlobalState } from './shared/services/global.state';

import { HttpService } from './shared/services/http.service';
import { ConstantService } from './shared/services/constant.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component'; 

let dashboardState = { name: 'dashboard', url: '/', component: DashboardComponent };
let userState = { name: 'user', url: '/:username', component: DashboardComponent };
let repoState = { name: 'repo', url: '/:username/:repo', component: DashboardComponent };

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    UIRouterModule.forRoot({ states: [dashboardState, userState, repoState], useHash: true, configClass: MyUiRouterConfigService, otherwise: '/' }),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GlobalState, HttpService, ConstantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
