/* tslint:disable:no-unused-variable */

import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UIRouter } from 'ui-router-ng2';

describe('App: Ng2Challenge', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
       providers: [ UIRouter],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
