import { Component } from '@angular/core';
import { ErrorPageComponent } from '../../../components/error-page/error-page.component';

@Component({
  selector: 'app-error-502',
  standalone: true,
  imports: [ErrorPageComponent],
  template: `<app-error-page
    [imgSrc]="'assets/error_images/502.png'"
    [errorTitle]="'Bad Gateway 502'"
    [errorMessage]="
      'The server received an invalid response from the upstream server.'
    "
  ></app-error-page>`,
})
export class Error502Component {}
