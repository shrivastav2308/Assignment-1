import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public username!: string;
  public password!: string;
  constructor(private router: Router) {}

  ngOnInit() {
    
  }

  logInUser() {
    if(this.username == "admin" && this.password == "admin") {
      alert("Login Successful");
      this.router.navigate(['/new-user']);
    }
    else {
      alert("Unauthorized user");
    }
  }
}
