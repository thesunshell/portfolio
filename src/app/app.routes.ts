import { Routes } from '@angular/router';
import { HeaderPageComponent } from './layouts/header-page/header-page.component';
import { FullPageComponent } from './layouts/full-page/full-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HeaderPageComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'services',
        loadComponent: () =>
          import('./pages/services/services.component').then(
            (m) => m.ServicesComponent
          ),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./pages/projects/projects.component').then(
            (m) => m.ProjectsComponent
          ),
      },
      {
        path: 'aboutme',
        loadComponent: () =>
          import('./pages/about-me/about-me.component').then(
            (m) => m.AboutMeComponent
          ),
      },
      {
        path: 'contactme',
        loadComponent: () =>
          import('./pages/contact-me/contact-me.component').then(
            (m) => m.ContactMeComponent
          ),
      },
      {
        path: 'collaborate',
        loadComponent: () =>
          import('./pages/collaborate/collaborate.component').then(
            (m) => m.CollaborateComponent
          ),
      },
    ],
  },
  {
    path: 'error',
    component: FullPageComponent,
    children: [
      {
        path: '400',
        loadComponent: () =>
          import('./pages/errors/error-400/error-400.component').then(
            (m) => m.Error400Component
          ),
      },
      {
        path: '401',
        loadComponent: () =>
          import('./pages/errors/error-401/error-401.component').then(
            (m) => m.Error401Component
          ),
      },
      {
        path: '403',
        loadComponent: () =>
          import('./pages/errors/error-403/error-403.component').then(
            (m) => m.Error403Component
          ),
      },
      {
        path: '404',
        loadComponent: () =>
          import('./pages/errors/error-404/error-404.component').then(
            (m) => m.Error404Component
          ),
      },
      {
        path: '500',
        loadComponent: () =>
          import('./pages/errors/error-500/error-500.component').then(
            (m) => m.Error500Component
          ),
      },
      {
        path: '502',
        loadComponent: () =>
          import('./pages/errors/error-502/error-502.component').then(
            (m) => m.Error502Component
          ),
      },
      {
        path: '503',
        loadComponent: () =>
          import('./pages/errors/error-503/error-503.component').then(
            (m) => m.Error503Component
          ),
      },
      {
        path: '504',
        loadComponent: () =>
          import('./pages/errors/error-504/error-504.component').then(
            (m) => m.Error504Component
          ),
      },
    ],
  },
  {
    path: 'auth',
    component: FullPageComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./auth/login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./auth/register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
      {
        path: 'forget-password',
        loadComponent: () =>
          import('./auth/forget-password/forget-password.component').then(
            (m) => m.ForgetPasswordComponent
          ),
      },
    ],
  },
];
