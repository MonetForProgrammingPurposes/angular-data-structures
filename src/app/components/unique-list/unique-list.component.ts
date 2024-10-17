import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-unique-list',
  standalone: true,
  templateUrl: './unique-list.component.html',
  styleUrls: ['./unique-list.component.css'],
  imports: [FormsModule, CommonModule], // Add FormsModule and CommonModule here
})
export class UniqueListComponent {
  newString: string = ''; // Variable for new string input
  strings: string[] = []; // Array to hold unique strings

  // Function to add new strings to the list if unique
  addString() {
    const trimmedString = this.newString.trim(); // Trim whitespace from input
    if (trimmedString && !this.strings.includes(trimmedString)) { // Check if string is unique
      console.log('Adding unique string:', trimmedString); // Log the new unique string
      this.strings.push(trimmedString); // Add to the array
      this.newString = ''; // Clear the input field
      console.log('Current unique strings:', this.strings); // Log the current state of strings
    } else if (this.strings.includes(trimmedString)) {
      console.log('String already exists.'); // Log if the string is a duplicate
    }
  }

  // Function to remove a string from the list
  removeString(index: number) {
    this.strings.splice(index, 1); // Remove string at specified index
  }
}
