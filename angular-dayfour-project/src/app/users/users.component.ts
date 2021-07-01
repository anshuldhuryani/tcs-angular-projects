import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  message: string = "User Management System";

  userList: any;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(result => {
      this.userList = result;
      console.log(this.userList);
    }, error => {
      console.log(error)
    });
  }

}
