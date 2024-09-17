import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Adjust path as necessary
import { RegisterComponent } from './register/register.component'; // Adjust path as necessary
import { BudgetPlannerHomeComponent } from './budget-planner-home/budget-planner-home.component'; // Adjust path as necessary

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: BudgetPlannerHomeComponent }, // Home page route
  // Add other routes here if needed
];

export { routes };
