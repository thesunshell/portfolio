import { Component } from '@angular/core';
import { ErrorPageComponent } from '../../../components/error-page/error-page.component';

@Component({
  selector: 'app-error-504',
  standalone: true,
  imports: [ErrorPageComponent],
  template: `<app-error-page
    [imgSrc]="'assets/error_images/504.png'"
    [errorTitle]="'Gateway Timeout 504'"
    [errorMessage]="
      'The server did not receive a timely response from the upstream server.'
    "
  ></app-error-page>`,
})
export class Error504Component {}
