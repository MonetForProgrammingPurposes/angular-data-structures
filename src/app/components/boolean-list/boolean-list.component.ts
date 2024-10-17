import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boolean-list',
  templateUrl: './boolean-list.component.html',
  styleUrls: ['./boolean-list.component.css'],
  standalone: true,
  imports: [CommonModule] // Import CommonModule here
})
export class BooleanListComponent {
  // Sample data: List of boolean values
  booleanValues: boolean[] = [
    true,
    false,
    true,
    false,
    true,
  ];

  // Method to convert boolean to readable string
  getReadableValue(value: boolean): string {
    return value ? 'Yes' : 'No';
  }
}
