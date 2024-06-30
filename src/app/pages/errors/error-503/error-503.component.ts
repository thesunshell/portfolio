import { Component } from '@angular/core';
import { ErrorPageComponent } from '../../../components/error-page/error-page.component';

@Component({
  selector: 'app-error-503',
  standalone: true,
  imports: [ErrorPageComponent],
  template: `<app-error-page
    [imgSrc]="'assets/error_images/503.png'"
    [errorTitle]="'Service Unavailable 503'"
    [errorMessage]="
      'The server is not ready to handle the request, usually due to maintenance or overload.'
    "
  ></app-error-page>`,
})
export class Error503Component {}
