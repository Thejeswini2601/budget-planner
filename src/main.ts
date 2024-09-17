import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';
import { BudgetPlannerHomeComponent } from './app/budget-planner-home/budget-planner-home.component'; // Adjust path as necessary
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: BudgetPlannerHomeComponent }, // Add home route
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule) // for animations, if needed
  ]
})
.catch(err => console.error(err));
