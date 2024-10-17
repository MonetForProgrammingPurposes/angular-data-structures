import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-with-duplicates',
  templateUrl: './list-with-duplicates.component.html',
  styleUrls: ['./list-with-duplicates.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ListWithDuplicatesComponent {
  // Example list with some duplicate items
  items: string[] = [
    'Item 1', 'Item 2', 'Item 3', 'Item 2', 'Item 4', 'Item 1', 'Item 5'
  ];

  // Method to remove duplicates (if you need this functionality)
  removeDuplicates() {
    this.items = Array.from(new Set(this.items));
  }
}
