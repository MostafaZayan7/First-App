import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  // properties
  user: User;

  // methods
  constructor() {
   }

  ngOnInit() {
    this.user = {
      firstName : 'mostafa',
      lastName : 'zayan',
      email: ''
    };
  }
}
