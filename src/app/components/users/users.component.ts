import { Component, OnInit , ViewChild} from '@angular/core';
import { User } from '../../models/User';
import { DataService } from '../../services/data.service';


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

  constructor(private dataServices: DataService) { }

  ngOnInit() {

      this.dataServices.getData().subscribe(data => {
          console.log(data);
      });

      this.dataServices.getUsers().subscribe(users => {
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

      this.dataServices.addUser(value);
      value.isActive = true;

      value.hide = true;
      this.form.reset();

    }
  }



}
