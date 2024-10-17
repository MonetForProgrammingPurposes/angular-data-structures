import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

interface Task {
  name: string;
  priority: number; // 1 for low, 2 for medium, 3 for high
}

@Component({
  selector: 'app-priority-list',
  standalone: true,
  templateUrl: './priority-list.component.html',
  styleUrls: ['./priority-list.component.css'],
  imports: [FormsModule, CommonModule], // Add FormsModule and CommonModule here
})
export class PriorityListComponent {
  newTaskName: string = ''; // Variable for new task name input
  newTaskPriority: number | null = null; // Variable for new task priority input
  tasks: Task[] = []; // Array to hold tasks

  // Function to add a new task to the list
  addTask() {
    const trimmedName = this.newTaskName.trim(); // Trim whitespace from input
    if (trimmedName && this.newTaskPriority !== null) { // Check if inputs are valid
      const newTask: Task = {
        name: trimmedName,
        priority: this.newTaskPriority,
      };
      console.log('Adding task:', newTask); // Log the new task
      this.tasks.push(newTask); // Add to the array
      this.newTaskName = ''; // Clear the task name input
      this.newTaskPriority = null; // Clear the task priority input
      console.log('Current tasks:', this.tasks); // Log the current state of tasks
    } else {
      console.log('Please enter valid task details'); // Log if inputs are invalid
    }
  }

  // Function to remove a task from the list
  removeTask(index: number) {
    const removedTask = this.tasks.splice(index, 1); // Remove the task
    console.log('Removed task:', removedTask); // Log the removed task
    console.log('Current tasks:', this.tasks); // Log the current state of tasks
  }
}
