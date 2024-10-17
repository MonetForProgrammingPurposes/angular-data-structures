import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deletable-list',
  templateUrl: './deletable-list.component.html',
  styleUrls: ['./deletable-list.component.css'],
  standalone: true,
  imports: [CommonModule] // Import CommonModule here
})
export class DeletableListComponent {
  // Sample data: List of items
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  // Method to delete an item by index
  deleteItem(index: number): void {
    this.items.splice(index, 1); // Remove the item from the array
  }
}
