import { Supplier } from './../models/supplier';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MustMatch } from '../directives/must-match.validator';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  supplier: Supplier = new Supplier();
  supplierForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.supplierForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      amount: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      acceptTerms: ['', [Validators.required]]
    }, { validator: MustMatch('password', 'confirmPassword') })
  }

  get f() {
    return this.supplierForm.controls;
  }

  onSubmit() {
    console.log(this.supplier);
  }

}
