import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Employee } from 'src/app/models/Employee.Model';
import { Expense } from 'src/app/models/Expense.Model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  expanseList: any[]
  employeeData: any[]

  constructor(private localStorageService: LocalStorageService, private router: Router) {
  }

  ngOnInit() {
    this.employeeData = this.localStorageService.getEmployeeData()
  }

  previousExpense: number = 0
  returnCost: number
  // getTotalExpanse(employeeId):number{

  //   this.employeeData.forEach(singleEmployee => {
  //     singleEmployee.expense.forEach(singleExpense => {
  //       this.returnCost=singleExpense.expenseCost
  //       this.previousExpense += this.returnCost
  //       return this.previousExpense

  //     });
  //   });

  // }
  // getTotalExpanse(): { [key: number]: number } {
  //   const totalExpenses = {};

  //   this.employeeData.forEach(singleEmployee => {
  //     const employeeId = singleEmployee.employeeId;
  //     let employeeExpense = 0;

  //     singleEmployee.expense.forEach(singleExpense => {
  //       employeeExpense += singleExpense.expenseCost;
  //     });

  //     totalExpenses[employeeId] = employeeExpense;
  //   });

  //   return totalExpenses;
  // }
  getTotalExpanse(employee: Employee): number {
    let totalExpense = 0;
    employee.expense.forEach(singleExpense => {
      totalExpense += singleExpense.expenseCost;
    });
    return totalExpense;
  }


  editEmployee(id: number) {
    this.router.navigate(["edit-employee/"+id])
  }

  deleteEmployee(id: number) {
    
  }
}
