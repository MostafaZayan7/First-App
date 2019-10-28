import { Component, OnInit } from '@angular/core';
import { User } from './../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address : {
      street: '',
      city: '',
      state: ''
    }
  };
  users: User[];
  loaded = false;
  enableAdd = false ;
  currentClasses = {};
  currentStyle = {};
  showUserForm = false;


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
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
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

          registered: new Date('01/03/2017 05:30:00'),
          hide: true
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

          registered: new Date('03/05/2016 07:20:00'),
          hide: true
        }
      ];

      this.loaded = true;
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address : {
        street: '',
        city: '',
        state: ''
      }
    };
  }

  onSubmit(e) {
    console.log(123);
    e.preventDefault();
  }

  fireEvent(e) {
    console.log(e.target.value);
  }

}
