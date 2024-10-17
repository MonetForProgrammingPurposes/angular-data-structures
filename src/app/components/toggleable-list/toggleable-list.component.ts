import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-toggleable-list',
  standalone: true,
  templateUrl: './toggleable-list.component.html',
  styleUrls: ['./toggleable-list.component.css'],
  imports: [FormsModule, CommonModule], // Add FormsModule and CommonModule here
})
export class ToggleableListComponent {
  newString: string = ''; // Variable for new string input
  strings: { value: string; isVisible: boolean }[] = []; // Array to hold strings with visibility status

  // Function to add new strings to the list
  addString() {
    const trimmedString = this.newString.trim(); // Trim whitespace from input
    if (trimmedString) { // Check if input is not empty
      console.log('Adding string:', trimmedString); // Log the new string
      this.strings.push({ value: trimmedString, isVisible: true }); // Add to the array with visibility set to true
      this.newString = ''; // Clear the input field
      console.log('Current strings:', this.strings); // Log the current state of strings
    }
  }

  // Function to toggle visibility of a string
  toggleVisibility(index: number) {
    this.strings[index].isVisible = !this.strings[index].isVisible; // Toggle the visibility status
  }

  // Function to remove a string from the list
  removeString(index: number) {
    this.strings.splice(index, 1); // Remove string at specified index
  }
}
