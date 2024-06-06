import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,  ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  users:any[] = []
  loginForm: FormGroup
  constructor(private authService: AuthService, private router: Router,private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    
    const storedUsers = sessionStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
    
  }

  onLoginClick(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      
      let isAuthenticated = false;

      this.users.forEach(user => {
        if (user.email === email && user.password === password) {
          isAuthenticated = true;
          sessionStorage.setItem('currentUserEmail', email);
          sessionStorage.setItem('inside', 'true');
        }
      });

      if (isAuthenticated) {
        console.log('Login successful!');
        this.router.navigate(['/flights']);
      } else {
        console.log('Invalid email or password');
        alert('Invalid email or password');
      }
    }
  }
  toSignup(){
    this.router.navigate(['/signup']);
  }
}
