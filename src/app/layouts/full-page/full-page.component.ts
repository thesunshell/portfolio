import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-full-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './full-page.component.html',
  styleUrl: './full-page.component.css',
})
export class FullPageComponent {}
