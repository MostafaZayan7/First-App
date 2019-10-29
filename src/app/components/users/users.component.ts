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
    email: ''
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

      this.loaded = true;
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   };
  // }

  onSubmit(e) {
    console.log(123);
    e.preventDefault();
  }



}
