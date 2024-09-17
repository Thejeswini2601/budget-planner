import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  emailError: string | null = null;
  passwordError: string | null = null;
  formError: string | null = null; // New error message for the entire form

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin() {
    // Reset errors
    this.emailError = null;
    this.passwordError = null;
    this.formError = null; // Reset form error

    // Check if the form is invalid
    if (this.loginForm.invalid) {
      // Set individual field errors
      this.emailError = this.loginForm.get('email')?.hasError('required') ? 'Email is required' : 
                        this.loginForm.get('email')?.hasError('email') ? 'Invalid email address' : null;
      this.passwordError = this.loginForm.get('password')?.hasError('required') ? 'Password is required' : 
                           this.loginForm.get('password')?.hasError('minlength') ? 'Password must be at least 6 characters' : null;
      
      // Set general form error if any field is invalid
      if (this.loginForm.get('email')?.invalid || this.loginForm.get('password')?.invalid) {
        this.formError = 'Please fill out all fields correctly.';
      }
      
      return;
    }

    console.log('Login Successful', this.loginForm.value);
    // Navigate to home page upon successful login
    this.router.navigate(['/home']);
  }
}
