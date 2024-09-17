import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  usernameError: string | null = null;
  emailError: string | null = null;
  passwordError: string | null = null;
  formError: string | null = null; // New error message for the entire form

  constructor(private fb: FormBuilder, private router: Router) { // Inject Router
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onRegister() {
    // Reset errors
    this.usernameError = null;
    this.emailError = null;
    this.passwordError = null;
    this.formError = null; // Reset form error

    // Check if the form is invalid
    if (this.registerForm.invalid) {
      // Set individual field errors
      this.usernameError = this.registerForm.get('username')?.hasError('required') ? 'Username is required' : null;
      this.emailError = this.registerForm.get('email')?.hasError('email') ? 'Invalid email address' : null;
      this.passwordError = this.registerForm.get('password')?.hasError('minlength') ? 'Password must be at least 6 characters' : null;
      
      // Set general form error if any field is invalid
      if (this.registerForm.get('username')?.invalid || this.registerForm.get('email')?.invalid || this.registerForm.get('password')?.invalid) {
        this.formError = 'Please fill out all fields correctly.';
      }
      
      return;
    }

    console.log('Registration Successful', this.registerForm.value);
    // Navigate to home page upon successful registration
    this.router.navigate(['/home']);
  }
}
