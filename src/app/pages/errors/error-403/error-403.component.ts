import { Component } from '@angular/core';
import { ErrorPageComponent } from '../../../components/error-page/error-page.component';

@Component({
  selector: 'app-error-403',
  standalone: true,
  imports: [ErrorPageComponent],
  template: `<app-error-page
    [imgSrc]="'assets/error_images/403.png'"
    [errorTitle]="'Forbidden 403'"
    [errorMessage]="
      'You do not have permission to access the requested resource.'
    "
  ></app-error-page>`,
})
export class Error403Component {}
