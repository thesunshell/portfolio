import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-header-page',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './header-page.component.html',
  styleUrl: './header-page.component.css',
})
export class HeaderPageComponent {}
