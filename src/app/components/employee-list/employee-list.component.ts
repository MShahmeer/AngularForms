import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Employee } from 'src/app/models/Employee.Model';
import { Expense } from 'src/app/models/Expense.Model';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  expanseList: any[]
  employeeData: any[]

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit(){
    this.employeeData = this.localStorageService.getEmployeeData()
  }

  previousExpense:number
  getTotalExpanse(employeeId):number{
    this.employeeData.forEach(singleEmployee => {
      singleEmployee.expanse.forEach(singleExpense => {
        
      });
    });
    return 0
  }

  editEmployee(id:number){

  }

  deleteEmployee(id:number){

  }
}
