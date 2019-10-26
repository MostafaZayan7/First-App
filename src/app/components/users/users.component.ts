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
          image: 'http://lorempixel.com/600/600/people/3',
          isActive: true,
          balance:  100,
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
          image: 'http://lorempixel.com/600/600/people/2',
          balance:  200,
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
          image: 'http://lorempixel.com/600/600/people/1',
          balance:  300,
          registered: new Date('03/05/2016 07:20:00')
        }
      ];

      this.loaded = true;

      this.setCurrentClasses();
      this.setCurrentStyle();

      this.addUser({
      firstName : 'ali',
      lastName : 'zayan'
     });
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd
    };
  }
  setCurrentStyle() {
    this.currentStyle = {
      'padding-top' : this.showExtend ? '0' : '140px'
    };
  }

}
