import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { CreateEmployeeDto } from '../../models/employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  standalone: false 
})
export class EmployeeFormComponent implements OnInit {
  employeeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  private createForm(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      hireDate: ['', [Validators.required]],
      position: ['', [Validators.required]],
      department: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const newEmployee: CreateEmployeeDto = {
        ...this.employeeForm.value,
        hireDate: new Date(this.employeeForm.value.hireDate)
      };
      
      this.employeeService.addEmployee(newEmployee);
      this.router.navigate(['/employees']);
    }
  }
}