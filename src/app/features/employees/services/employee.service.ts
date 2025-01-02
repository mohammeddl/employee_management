import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import {
  Employee,
  CreateEmployeeDto,
  UpdateEmployeeDto,
} from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private readonly STORAGE_KEY = 'employees';
  private employeesSubject = new BehaviorSubject<Employee[]>(
    this.loadEmployees()
  );

  constructor() {}

  private loadEmployees(): Employee[] {
    const storedEmployees = localStorage.getItem(this.STORAGE_KEY);
    return storedEmployees ? JSON.parse(storedEmployees) : [];
  }

  private saveEmployees(employees: Employee[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(employees));
    this.employeesSubject.next(employees);
  }

  getEmployees(): Observable<Employee[]> {
    return this.employeesSubject.asObservable();
  }

  getEmployeeById(id: string): Observable<Employee | undefined> {
    return this.employeesSubject.pipe(
      map((employees) => employees.find((emp) => emp.id === id))
    );
  }

  addEmployee(employee: CreateEmployeeDto): void {
    const employees = this.employeesSubject.value;
    const newEmployee: Employee = {
      ...employee,
      id: crypto.randomUUID(),
    };
    this.saveEmployees([...employees, newEmployee]);
  }

  updateEmployee(id: string, updates: UpdateEmployeeDto): void {
    const employees = this.employeesSubject.value;
    const updatedEmployees = employees.map((emp) =>
      emp.id === id ? { ...emp, ...updates } : emp
    );
    this.saveEmployees(updatedEmployees);
  }

  deleteEmployee(id: string): void {
    const employees = this.employeesSubject.value;
    const filteredEmployees = employees.filter((emp) => emp.id !== id);
    this.saveEmployees(filteredEmployees);
  }
}
