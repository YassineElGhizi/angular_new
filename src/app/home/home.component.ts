import {Component, OnInit} from '@angular/core';
import {User} from "../models/User";
import {UserServiceService} from "../service/user-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public users: User[] | undefined;

  constructor(public user_service: UserServiceService) {
    this.user_service.get_data()
    this.user_service.currentUser.subscribe(s => this.users = s)
  }

  ngOnInit(): void {
  }

}
