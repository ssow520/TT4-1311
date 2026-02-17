import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'] // ← pluriel
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  program = '';
  errorMessage = '';

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ){}

  submit(){
    this.auth.signup({
      name: this.name,
      email: this.email,
      password: this.password,
      program: this.program
    }).subscribe({
      next: (res)=>{
        console.log(res);
        this.router.navigate(['/login']);
      },
      error: (err)=>{
        console.log(err);
        this.errorMessage = "Signup failed!";
      }
    });
  }
}
