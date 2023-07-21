import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/Employee.Model';
import { Expense } from 'src/app/models/Expense.Model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  formEditRequest: boolean = false
  employeeData: any[]
  employeeID: number
  expanseList: Expense[] = []
  
  
  employee: Employee ={
    id: 0,
    name: '',
    contact: '',
    address: '',
    genderId: 0,
    expense: []
  }
  
  expense: Expense ={
    expenseId: 0,
    expenseName: '',
    type: '',
    expenseDate: undefined,
    expenseCost: 0,
    exployeeId: this.localStorageService.getEmployeeData().length == 0 ? 1 : this.localStorageService.getEmployeeData().length + 1
  }
  
  expanseForm = this.formBuilder.group({
    name: ["", Validators.required],
    contact: ["", Validators.required],
    address: [""],
    
  })
  constructor(private formBuilder: FormBuilder, private localStorageService: LocalStorageService){}

  ngOnInit(){
    
  }
  
  name = new FormControl("")
  
}
