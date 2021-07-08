import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  message: string = 'Hello World';

  constructor() { }

  ngOnInit(): void {
  }

  addition(num1: number, num2: number): number {
    return num1 + num2;
  }

}
