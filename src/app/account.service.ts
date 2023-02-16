import { EventEmitter, Injectable } from "@angular/core";

export class AccountService {
    accounts = [
        {
          name: 'Piyush Srivastava',
          collegeName: 'GLA University',
          degree: 'B.Tech',
          specialization: 'AIML'
        },
    ];
    statusUpdate = new EventEmitter<string>();

    constructor() {}

    addAccount(name: string, collegeName: string, degree: string, specialization: string) {
        this.accounts.push({name: name, collegeName: collegeName, degree: degree, specialization: specialization});
    }
  }

