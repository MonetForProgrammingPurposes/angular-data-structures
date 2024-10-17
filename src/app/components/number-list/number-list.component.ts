import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-number-list',
  standalone: true,
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css'],
  imports: [CommonModule], // Add CommonModule here
})
export class NumberListComponent {
  // Define the range of numbers to display
  numbers: number[] = [];

  constructor() {
    this.generateNumbers(1, 10); // Generate numbers from 1 to 10
  }

  // Method to generate an array of numbers
  generateNumbers(start: number, end: number) {
    for (let i = start; i <= end; i++) {
      this.numbers.push(i);
    }
  }
}
