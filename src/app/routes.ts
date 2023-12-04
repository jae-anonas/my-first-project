import { Routes } from "@angular/router";
import { DetailsComponent } from "./details/details.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login-page/login-page.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routeConfig: Routes = [
  {
    path: '',
    component: DashboardComponent,
    title: 'Dashboard',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        title: 'Home page'
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
    title: 'Home details'
  },
];

export default routeConfig;