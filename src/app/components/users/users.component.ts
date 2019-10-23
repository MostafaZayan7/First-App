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
  enableAdd = false ;
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
          },
          image: 'http://lorempixel.com/600/600/people/3'
        },
        {
          firstName : 'mohamed',
          lastName : 'zayan',
          age: 26,
          address: {
            street: 'alwaha',
            city: 'nasr city',
            state: 'cairo'
          },
          image: 'http://lorempixel.com/600/600/people/2'
        },
        {
          firstName : 'ahmed',
          lastName : 'zayan',
          age: 26,
          address: {
            street: 'alwaha',
            city: 'nasr city',
            state: 'cairo'
          },
          image: 'http://lorempixel.com/600/600/people/1'
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
