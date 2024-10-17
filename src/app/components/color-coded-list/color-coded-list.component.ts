import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ListItem {
  name: string;
  type: string; // e.g., 'important', 'warning', 'info'
}

@Component({
  selector: 'app-color-coded-list',
  templateUrl: './color-coded-list.component.html',
  styleUrls: ['./color-coded-list.component.css'],
  standalone: true,
  imports: [CommonModule] // Import CommonModule here
})
export class ColorCodedListComponent {
  // Sample data: List of items with types
  items: ListItem[] = [
    { name: 'Task 1', type: 'important' },
    { name: 'Task 2', type: 'warning' },
    { name: 'Task 3', type: 'info' },
    { name: 'Task 4', type: 'important' },
    { name: 'Task 5', type: 'warning' },
  ];

  // Method to get the background color based on item type
  getBackgroundColor(type: string): string {
    switch (type) {
      case 'important':
        return '#ffcccb'; // Light red for important
      case 'warning':
        return '#fff3cd'; // Light yellow for warning
      case 'info':
        return '#d1ecf1'; // Light blue for info
      default:
        return '#f8f9fa'; // Light grey for default
    }
  }
}
