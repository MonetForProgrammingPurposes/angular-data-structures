import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-strike-through-list',
  standalone: true,
  templateUrl: './strike-through-list.component.html',
  styleUrls: ['./strike-through-list.component.css'],
  imports: [FormsModule, CommonModule], // Add FormsModule and CommonModule here
})
export class StrikeThroughListComponent {
  newItem: string = ''; // Variable for new item input
  items: { name: string; completed: boolean }[] = []; // Array to hold items

  // Function to add new items to the list
  addItem() {
    const trimmedItem = this.newItem.trim(); // Trim whitespace from input
    if (trimmedItem) { // Check if input is not empty
      console.log('Adding item:', trimmedItem); // Log the new item
      this.items.push({ name: trimmedItem, completed: false }); // Add to the array
      this.newItem = ''; // Clear the input field
      console.log('Current items:', this.items); // Log the current state of items
    }
  }

  // Function to toggle the completion status of an item
  toggleItem(index: number) {
    this.items[index].completed = !this.items[index].completed; // Toggle completed status
  }

  // Function to remove an item from the list
  removeItem(index: number) {
    this.items.splice(index, 1); // Remove item at specified index
  }
}
