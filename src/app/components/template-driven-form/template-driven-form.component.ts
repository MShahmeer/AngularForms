import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/Employee.Model';
import { Expense } from 'src/app/models/Expense.Model';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  ngOnInit(){
    this.addFields()
  }

  //expenseList: Expense[] = []

  employee: Employee = {
    id: 0,
    name: '',
    contact: '',
    address: '',
    genderId: 0,
    expense: []
  };

  expense: Expense = {
    expenseId: 0,
    expenseName: "",
    type: '',
    expenseDate: undefined,
    expenseCost: 0,
    exployeeId: 0
  }

  genders = [
    { id: 1, gender: "Male" },
    { id: 2, gender: "Female" },
    { id: 3, gender: "Other" }
  ]

  expenses = [
    { id: 1, type: "Food" },
    { id: 2, type: "Travel" },
    { id: 3, type: "Genitorial" }
  ]

  addFields() {
    const newExpense: Expense = {
      expenseId: this.employee.expense.length+1,
      expenseName: "",
      type: '',
      expenseDate: new Date,
      expenseCost: 0,
      exployeeId: this.employee.id
    }

    // this.expenseList.push(newExpense)
    // this.employee.expense = this.expenseList
    // console.log(this.employee.expense)
    this.employee.expense.push(newExpense)
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      // console.log(this.employee)
    } else {
      console.log("invalid form")
    }
  }
}
