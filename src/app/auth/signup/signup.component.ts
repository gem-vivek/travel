import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  standalone: true,
  imports: [CommonModule,  ReactiveFormsModule],
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  dataEmail:any[]= []
  data = new FormData();
  users: any[] = [];
  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { 
      this.signupForm = this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      });

    const storedUsers = sessionStorage.getItem('users');
      if (storedUsers) {
        this.users = JSON.parse(storedUsers);
      }
    }

  ngOnInit(): void {
    
  }
  onSignup() {
    
  }
  onSigningup(): void {
    if (this.signupForm.valid) {
      const newUser = {
        email: this.signupForm.value.email,
        password: this.signupForm.value.password
      };
      this.users.push(newUser);
      sessionStorage.setItem('users', JSON.stringify(this.users));
      
      sessionStorage.setItem('inside', 'true');

      this.router.navigate(['/flights']);
    }
  }
  toLogin(){
    this.router.navigate(['/login']);
  }
}
