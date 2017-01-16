/* tslint:disable:no-unused-variable */

import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, BaseRequestOptions, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpService } from './../../shared/services/http.service';
import { ConstantService } from './../../shared/services/constant.service';
import { UIRouter } from 'ui-router-ng2';

describe('Component: Dashboard', () => {
  let component: DashboardComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule],
      providers: [HttpService, ConstantService, XHRBackend, MockBackend,
        BaseRequestOptions,
        {// mocking XHR request
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [DashboardComponent]
    })
      .compileComponents();
  }));
  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
