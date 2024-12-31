import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeListComponent,
    EmployeeCardComponent,
    EmployeeFormComponent,
    HighlightDirective,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
