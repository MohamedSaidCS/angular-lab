import { Component, OnInit } from '@angular/core';
import {Student} from "../../_models/student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[] = [
    new Student(1, 'Mohamed', 24, 1),
    new Student(2, 'Ahmed', 23, 2),
    new Student(3, 'Omar', 25, 1),
    new Student(4, 'Osama', 26, 3),
  ];

  student: Student = new Student(0, '', 0, 0);

  editing: boolean = false;

  currentIndex: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  addStudent() {
    this.students.push(this.student);
    this.student = new Student(0, '', 0, 0);
  }

  showStudent(index: number) {
    this.currentIndex = index;
  }

  editStudent(index: number) {
    this.currentIndex = index;
    this.student = this.students[index];
    this.editing = true;
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }

  saveStudent(currentIndex: number) {
    this.students[currentIndex] = this.student;
    this.student = new Student(0, '', 0, 0);
    this.editing = false;
  }
}
