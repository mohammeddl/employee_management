import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  isEditMode = false;
  employeeId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.employeeId = params['id'];
        this.loadEmployee(params['id']);
      }
    });
  }

  private createForm(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      hireDate: ['', [Validators.required]],
      position: ['', [Validators.required]],
      department: ['', [Validators.required]],
    });
  }

  private loadEmployee(id: string): void {
    this.employeeService.getEmployeeById(id).subscribe((employee) => {
      if (employee) {
        const formattedDate = new Date(employee.hireDate)
          .toISOString()
          .split('T')[0];

        this.employeeForm.patchValue({
          ...employee,
          hireDate: formattedDate,
        });
      } else {
        this.router.navigate(['/employees']);
      }
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const formData = {
        ...this.employeeForm.value,
        hireDate: new Date(this.employeeForm.value.hireDate),
      };

      if (this.isEditMode && this.employeeId) {
        this.employeeService.updateEmployee(this.employeeId, formData);
      } else {
        this.employeeService.addEmployee(formData);
      }

      this.router.navigate(['/employees']);
    }
  }
  onCancel(): void {
    this.router.navigate(['/employees']);
  }
}
