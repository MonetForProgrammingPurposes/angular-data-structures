import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [FormsModule, CommonModule], // Add FormsModule and CommonModule here
})
export class TaskListComponent {
  newTask: string = ''; // Variable for new task input
  tasks: { title: string; isCompleted: boolean }[] = []; // Array to hold tasks with completion status

  // Function to add new tasks to the list
  addTask() {
    const trimmedTask = this.newTask.trim(); // Trim whitespace from input
    if (trimmedTask) { // Check if input is not empty
      console.log('Adding task:', trimmedTask); // Log the new task
      this.tasks.push({ title: trimmedTask, isCompleted: false }); // Add to the array with completion status set to false
      this.newTask = ''; // Clear the input field
      console.log('Current tasks:', this.tasks); // Log the current state of tasks
    }
  }

  // Function to toggle completion status of a task
  toggleCompletion(index: number) {
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted; // Toggle the completion status
  }

  // Function to remove a task from the list
  removeTask(index: number) {
    this.tasks.splice(index, 1); // Remove task at specified index
  }
}
