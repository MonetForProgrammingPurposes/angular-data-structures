import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-student-list',
  standalone: true,
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  imports: [FormsModule, CommonModule], // Add FormsModule and CommonModule here
})
export class StudentListComponent {
  newStudent: string = ''; // Variable for new student input
  students: string[] = []; // Array to hold student names

  // Function to add new students to the list
  addStudent() {
    const trimmedStudent = this.newStudent.trim(); // Trim whitespace from input
    if (trimmedStudent) { // Check if input is not empty
      console.log('Adding student:', trimmedStudent); // Log the new student
      this.students.push(trimmedStudent); // Add to the array
      this.newStudent = ''; // Clear the input field
      console.log('Current students:', this.students); // Log the current state of students
    }
  }

  // Function to remove a student from the list
  removeStudent(index: number) {
    this.students.splice(index, 1); // Remove student at specified index
  }
}
