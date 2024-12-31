import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

const routes: Routes = [{ path: '', component: EmployeesComponent },
  {path:'add',component:EmployeesComponent},
  {path:'edit/:id',component:EmployeeFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
