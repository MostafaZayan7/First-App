import { Component, OnInit } from '@angular/core';
import { User } from './../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtend = true;
  loaded = false;
  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName : 'mostafa',
          lastName : 'zayan',
          age: 26,
          address: {
            street: 'alwaha',
            city: 'nasr city',
            state: 'cairo'
          }
        },
        {
          firstName : 'mohamed',
          lastName : 'zayan',
          age: 26,
          address: {
            street: 'alwaha',
            city: 'nasr city',
            state: 'cairo'
          }
        },
        {
          firstName : 'ahmed',
          lastName : 'zayan',
          age: 26,
          address: {
            street: 'alwaha',
            city: 'nasr city',
            state: 'cairo'
          }
        }
      ];

      this.loaded = true;

      this.addUser({
      firstName : 'ali',
      lastName : 'zayan'
     });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
