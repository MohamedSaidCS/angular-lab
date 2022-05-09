import { Component, OnInit } from '@angular/core';
import {Department} from "../../_models/department";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments: Department[] = [
    new Department(1, 'Open Source', 'Alexandria'),
    new Department(2, 'AI', 'Alexandria'),
    new Department(3, 'Mobile', 'Aswan'),
    new Department(4, 'PD', 'Smart Village'),
  ];

  department: Department = new Department(0, '', '');

  editing: boolean = false;

  currentIndex: number = -1;

  constructor() {
  }

  ngOnInit(): void {
  }

  addDepartment() {
    this.departments.push(this.department);
    this.department = new Department(0, '', '');
  }

  showDepartment(index: number) {
    this.currentIndex = index;
  }

  editDepartment(index: number) {
    this.currentIndex = index;
    this.department = this.departments[index];
    this.editing = true;
  }

  deleteDepartment(index: number) {
    this.departments.splice(index, 1);
  }

  saveDepartment(currentIndex: number) {
    this.departments[currentIndex] = this.department;
    this.department = new Department(0, '', '');
    this.editing = false;
  }
}
