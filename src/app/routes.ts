import { Routes } from "@angular/router";
import { DetailsComponent } from "./details/details.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login-page/login-page.component";
import { MainComponent } from './main/main.component';

const routeConfig: Routes = [
  {
    path: 'main',
    component: MainComponent,
    title: 'Main',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        title: 'Home page',
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details'
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: '**',
    redirectTo: '/main/home'
  }
];

export default routeConfig;