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
  enableAdd = true ;
  currentClasses = {};
  currentStyle = {};

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
          isActive: true,
          registered: new Date('01/02/2018 08:30:00')
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

          registered: new Date('01/03/2017 05:30:00')
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

          registered: new Date('03/05/2016 07:20:00')
        }
      ];

      this.loaded = true;



  }

  addUser(user: User) {
    this.users.push(user);
  }



}
