import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './error-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorPageComponent {
  @Input() imgSrc: string = '';
  @Input() errorTitle: string = '';
  @Input() errorMessage: string = '';

  ngOnInit() {
    console.log('error page component');
  }
}
