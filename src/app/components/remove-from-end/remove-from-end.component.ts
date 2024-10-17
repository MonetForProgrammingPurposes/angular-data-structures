import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-remove-from-end',
  standalone: true,
  templateUrl: './remove-from-end.component.html',
  styleUrls: ['./remove-from-end.component.css'],
  imports: [FormsModule, CommonModule], // Add FormsModule and CommonModule here
})
export class RemoveFromEndComponent {
  newItem: string = ''; // Variable for new item input
  items: string[] = []; // Array to hold items

  // Function to add new items to the list
  addItem() {
    const trimmedItem = this.newItem.trim(); // Trim whitespace from input
    if (trimmedItem) { // Check if input is not empty
      console.log('Adding item:', trimmedItem); // Log the new item
      this.items.push(trimmedItem); // Add to the array
      this.newItem = ''; // Clear the input field
      console.log('Current items:', this.items); // Log the current state of items
    }
  }

  // Function to remove the last item from the list
  removeLastItem() {
    if (this.items.length > 0) { // Check if there are items to remove
      const removedItem = this.items.pop(); // Remove the last item
      console.log('Removed item:', removedItem); // Log the removed item
      console.log('Current items:', this.items); // Log the current state of items
    } else {
      console.log('No items to remove'); // Log if there are no items
    }
  }
}
