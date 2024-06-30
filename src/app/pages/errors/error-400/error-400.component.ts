import { Component, OnInit } from '@angular/core';
import { ErrorPageComponent } from '../../../components/error-page/error-page.component';

@Component({
  selector: 'app-error-400',
  standalone: true,
  imports: [ErrorPageComponent],
  template: `<app-error-page
    [imgSrc]="'assets/error_images/400.png'"
    [errorTitle]="'Bad Request 400'"
    [errorMessage]="
      'The server could not understand the request due to invalid syntax.'
    "
  ></app-error-page>`,
})
export class Error400Component implements OnInit {
  ngOnInit(): void {
    console.log("400 page init")
  }
}
