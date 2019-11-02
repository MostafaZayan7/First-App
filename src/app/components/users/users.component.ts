import { Component, OnInit , ViewChild} from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';


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
  @ViewChild('userForm', null) form: any;
  data: any;

  constructor(private userServices: UserService) { }

  ngOnInit() {

      this.userServices.getData().subscribe(data => {
          console.log(data);
      });

      this.userServices.getUsers().subscribe(users => {
        this.users = users;
        this.loaded = true;
      });

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

  onSubmit({value , valid}: {value: User , valid: boolean}) {
    if (!valid) {
      alert('the form is not valid ..');
    } else {
      value.registered = new Date();

      this.userServices.addUser(value);
      value.isActive = true;

      value.hide = true;
      this.form.reset();

    }
  }



}
