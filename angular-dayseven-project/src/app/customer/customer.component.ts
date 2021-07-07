import { Customer } from './../models/customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: Customer = new Customer();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.customer);
  }

}
