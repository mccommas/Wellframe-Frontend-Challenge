/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';
import { ConstantService } from './constant.service'; 
describe('Service: Http', () => { 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [HttpService, ConstantService]
    });
  });

  it('should ...', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
});
