import { Component, Injectable, Input } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [AccountService]
})
export class InfoComponent {
  @Input()
  account!: { name: string; collegeName: string; degree: string; specialization: string; };
  accounts!: [];
  
  constructor() {}
}


