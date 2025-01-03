import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  standalone: false
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]>;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.employees$ = this.employeeService.getEmployees();
  }

  ngOnInit(): void {}

  onAddEmployee(): void {
    this.router.navigate(['/employees/add']);
  }

  onEditEmployee(id: string): void {
    this.router.navigate(['/employees/edit', id]);
  }

  onDeleteEmployee(id: string): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id);
    }
  }
}