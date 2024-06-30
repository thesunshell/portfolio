import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navItems = [
    {
      label: 'home',
      routerLink: '/home',
    },
    {
      label: 'services',
      routerLink: '/services',
    },
    {
      label: 'projects',
      routerLink: '/projects',
    },
    {
      label: 'about me',
      routerLink: '/aboutme',
    },
    {
      label: 'contact me',
      routerLink: '/contactme',
    },
    {
      label: "let's collaborate",
      routerLink: '/collaborate',
    },
  ];
}
