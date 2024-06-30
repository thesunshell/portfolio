import { Component } from '@angular/core';
import { ErrorPageComponent } from '../../../components/error-page/error-page.component';

@Component({
  selector: 'app-error-404',
  standalone: true,
  imports: [ErrorPageComponent],
  template: `<app-error-page
    [imgSrc]="'assets/error_images/404.png'"
    [errorTitle]="'Not Found 404'"
    [errorMessage]="'The requested resource could not be found on the server.'"
  ></app-error-page>`,
})
export class Error404Component {}
