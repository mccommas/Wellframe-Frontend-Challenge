import { Component } from '@angular/core';
import { UIRouter } from 'ui-router-ng2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private uiRouter: UIRouter) {
  }
  public ngAfterViewInit(): void { 
    setTimeout(() => {
      this.uiRouter.stateService.go('dashboard');
    }, 300);
  }
}
