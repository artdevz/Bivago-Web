import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth-service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {

  username: string | null = null;

  constructor(private router: Router, private authS: AuthService) {}

  ngOnInit(): void {
    this.authS.loggedInUser.subscribe(userID => {
      if (userID) {
        // To-Do UserS.read
        this.username = "Art";
      }
      else {
        this.username = null;
      }
    });
  }

  signin(): void {
    this.router.navigate(["signin"]);
  }

  signout(): void {

  }

}
