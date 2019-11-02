import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable} from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  data: Observable<any>;

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
   getData() {
     this.data = new Observable(observer => {
        setTimeout(() => {
          observer.next(1);
        }, 1000);

        setTimeout(() => {
          observer.next(2);
        }, 2000);

        setTimeout(() => {
          observer.next(3);
        }, 3000);

        setTimeout(() => {
          observer.next({name: 'mostafa'});
        }, 4000);
     });
     return this.data;
   }

   getUsers(): Observable<User[]> {
     console.log('fetching from service');
     return of(this.users);
   }
   addUser(user: User) {
        this.users.unshift(user);
   }
}
