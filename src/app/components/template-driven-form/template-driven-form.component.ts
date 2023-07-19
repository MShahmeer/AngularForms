import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/Employee.Model';
import { Expense } from 'src/app/models/Expense.Model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  constructor(private localStorageService: LocalStorageService) {}
  ngOnInit(){
    this.addFields()
  }

  expenseList: Expense[] = []

  employee: Employee = {
    id: 0,
    name: '',
    contact: "",
    address: '',
    genderId: null,
    expense: []
  };

  expense: Expense = {
    expenseId: 0,
    expenseName: "",
    type: '',
    expenseDate: undefined,
    expenseCost: 0,
    exployeeId: this.localStorageService.getEmployeeData().length == 0 ? 1: this.localStorageService.getEmployeeData().length+1
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
    this.expenseList.push({
      expenseId: this.employee.expense.length+1,
      expenseName: "",
      type: '',
      expenseDate: new Date,
      expenseCost: null,
      exployeeId: this.expense.exployeeId
    })
    this.employee.expense = this.expenseList
    console.log(this.expenseList)
  }

  previousCost: number = 0;

  calculateTotalCost(currentCost: number){
    console.log("before operation",this.previousCost)
    this.previousCost +=currentCost
    console.log("After operation",this.previousCost)
    return this.previousCost;
  }
  // calculateTotalCost(expenses){
  //   expenses.forEach(expense => {
  //     this.previousCost += expense.expenseCost
  //     console.log(expense.expenseCost)
  //   });

  //   console.log("before operation",this.previousCost)
  //   this.previousCost +=currentCost
  //   console.log("After operation",this.previousCost)
  //   return this.previousCost;
  // }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formattedExpenses = this.expenseList.map((expense, index) => ({
        expenseId: index + 1,
        expenseName: expense.expenseName,
        type: expense.type,
        expenseDate: expense.expenseDate,
        expenseCost: expense.expenseCost,
        exployeeId: expense.exployeeId
      }));
  
      const data = {
        employeeName: this.employee.name,
        contact: this.employee.contact,
        Address: this.employee.address,
        Gender: this.employee.genderId,
        expense: formattedExpenses,
      };
      
      // Get existing employee data from local storage
      const existingEmployeeData = this.localStorageService.getEmployeeData();

      // Add current employee data to the existing employee data
      existingEmployeeData.push(data);

      // Save the updated employee data to local storage
      this.localStorageService.setEmployeeData(existingEmployeeData);

      console.log(JSON.parse(JSON.stringify(data)));
    } else {
      console.log("invalid form");
    }
  }
  

}
