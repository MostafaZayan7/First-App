import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[];

  constructor() {
    this.users = [
      {
        firstName : 'mostafa',
        lastName : 'zayan',
        email: 'mostafa.zayan@hotmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName : 'mohamed',
        lastName : 'zayan',
        email: 'mohamed.zayan@gmail.com',
        registered: new Date('01/03/2017 05:30:00'),
        hide: true
      },
      {
        firstName : 'ahmed',
        lastName : 'zayan',
        email: 'ahmed.zayan@yahoo.com',

        registered: new Date('03/05/2016 07:20:00'),
        hide: true
      }
    ];
   }
   getUsers(): User[] {
     console.log('fetching from service');
     return this.users;
   }
   addUser(user: User) {
        this.users.unshift(user);
   }
}
