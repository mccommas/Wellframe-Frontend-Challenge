/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyUiRouterConfigService } from './my-ui-router-config.service';
import { UIRouter, UIRouterModule } from "ui-router-ng2";
describe('Service: MyUiRouterConfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UIRouter, MyUiRouterConfigService]
    });
  });

  it('should ...', inject([MyUiRouterConfigService], (service: MyUiRouterConfigService) => {
    expect(service).toBeTruthy();
  }));
});
