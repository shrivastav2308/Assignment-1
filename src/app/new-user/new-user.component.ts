import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private router: Router,
    private accountService: AccountService) { }
  ngOnInit() {
    
  }
  onCreateAccount(studentName: string, collegeName: string, degree: string, specialization: string) {
    this.router.navigate(['/info']);
    this.accountService.addAccount(studentName, collegeName, degree, specialization);
  }
  
}