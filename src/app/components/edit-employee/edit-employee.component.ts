import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee.Model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  employee: any
  employeeData: any[]

  constructor(private route: ActivatedRoute, private router: Router, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {

    this.employeeData = this.localStorageService.getEmployeeData()
    this.route.paramMap.subscribe(params => {
      const employeeId = Number(params.get('id'));
      this.employee = this.employeeData.find((employee: any) => employee.id == employeeId + 1);
    });
  }

  onNameChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (this.employee) {
      this.employee.employeeName = target.value;
    }
  }

  onSave(): void {
    if (this.employee) {
      const index = this.employeeData.findIndex((employee: Employee) => employee.id === this.employee?.id);
      if (index !== -1) {
        // Update the employee data in the array
        this.employeeData[index] = this.employee;
        // Update the local storage with the modified data
        localStorage.setItem('expenseform', JSON.stringify(this.employeeData));
        // Redirect back to the employee list page after saving
        this.router.navigate(['/employees']);
      }
    }
  }
}
