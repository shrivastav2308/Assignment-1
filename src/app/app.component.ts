import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Assignment-1';
  accounts: {name: string, collegeName: string, degree: string, specialization: string}[] = [];

  constructor(private router: Router,
    private accountService: AccountService) {}

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
  login() {
    this.router.navigate(['/login']);
  }
}
