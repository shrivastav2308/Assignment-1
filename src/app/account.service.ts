import { EventEmitter, Injectable } from "@angular/core";

export class AccountService {
    accounts = [
        {
          name: '',
          collegeName: '',
          degree: '',
          specialization: ''
        },
    ];
    statusUpdate = new EventEmitter<string>();

    constructor() {}

    addAccount(name: string, collegeName: string, degree: string, specialization: string) {
        this.accounts.push({name: name, collegeName: collegeName, degree: degree, specialization: specialization});
    }
  }

