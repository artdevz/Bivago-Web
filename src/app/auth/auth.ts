import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.html',
  styleUrl: './auth.scss'
})
export class Auth {

  loginData = { email: '', password: '' };
  isLoading = false;
  errorMessage: string | null = null;

  constructor(private router: Router, private authS: AuthService) {}

  signin(): void {
    this.isLoading = true;

    this.authS.signin(this.loginData.email, this.loginData.password).subscribe({

      next: (token: string) => {
        console.log("Login Successful: ", token);
        // this.authS.storeToken(token);
        this.isLoading = false;
        this.router.navigate(['']);
      },

      error: (error) => {
        console.log("Login failed: ", error);
        this.errorMessage = "Invalid Email or Password. Please, try again";
        this.isLoading = false;
      }

    });
  }

}
