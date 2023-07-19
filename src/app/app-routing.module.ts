import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

const routes: Routes = [
 { path:"", component: TemplateDrivenFormComponent},
 
  { path: 'employees', component: EmployeeListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
