import { Supplier } from './../models/supplier';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

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
      email: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    })
  }

  get f() {
    return this.supplierForm.controls;
  }

  onSubmit() {
    console.log(this.supplier);
  }

}
