import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userObj: any = {
    firstName: 'ROGER',
    lastName: 'LEE',
    salary: 12345.6789,
    bonus: 0.259,
    dateOfBirth: new Date("12-12-2019"),
    hobbies: ['Coding', 'Music', 'Eating', 'Travel']
  };

  userList: any = [
    { id: 101, name: 'Roger', age: 23 },
    { id: 102, name: 'Lee', age: 33 },
    { id: 103, name: 'Sarah', age: 44 },
    { id: 104, name: 'Bowling', age: 60 },
    { id: 105, name: 'James', age: 20 }
  ];

}
