import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-uppercase-string-list',
  standalone: true,
  templateUrl: './uppercase-string-list.component.html',
  styleUrls: ['./uppercase-string-list.component.css'],
  imports: [FormsModule, CommonModule], // Add FormsModule and CommonModule here
})
export class UppercaseStringListComponent {
  newString: string = ''; // Variable for new string input
  strings: string[] = []; // Array to hold added strings

  // Function to add new strings to the list
  addString() {
    if (this.newString.trim()) {
      console.log('Adding string:', this.newString); // Log the new string
      this.strings.push(this.newString.toUpperCase()); // Add to the array in uppercase
      this.newString = ''; // Clear the input field
      console.log('Current strings:', this.strings); // Log the current state of strings
    }
  }

  // Function to remove a string from the list
  removeString(index: number) {
    this.strings.splice(index, 1); // Remove string at specified index
  }
}
