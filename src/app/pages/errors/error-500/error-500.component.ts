import { Component } from '@angular/core';
import { ErrorPageComponent } from '../../../components/error-page/error-page.component';

@Component({
  selector: 'app-error-500',
  standalone: true,
  imports: [ErrorPageComponent],
  template: `<app-error-page
    [imgSrc]="'assets/error_images/500.png'"
    [errorTitle]="'Internal Server Error 500'"
    [errorMessage]="
      'Internal Server Error: The server encountered an internal error and was unable to complete your request.'
    "
  ></app-error-page>`,
})
export class Error500Component {}
