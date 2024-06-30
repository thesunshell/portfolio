import { Component } from '@angular/core';
import { ErrorPageComponent } from '../../../components/error-page/error-page.component';

@Component({
  selector: 'app-error-401',
  standalone: true,
  imports: [ErrorPageComponent],
  template: `<app-error-page
    [imgSrc]="'assets/error_images/401.png'"
    [errorTitle]="'Unauthorized 401'"
    [errorMessage]="
      'You must authenticate yourself to get the requested response.'
    "
  ></app-error-page>`,
})
export class Error401Component {}
