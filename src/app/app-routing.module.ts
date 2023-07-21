import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

const routes: Routes = [
  { path: "", component: TemplateDrivenFormComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'edit-employee/:id', component: TemplateDrivenFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
