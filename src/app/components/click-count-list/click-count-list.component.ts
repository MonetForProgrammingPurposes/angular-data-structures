import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ListItem {
  name: string;
  clickCount: number; // Count of clicks on the item
}

@Component({
  selector: 'app-click-count-list',
  templateUrl: './click-count-list.component.html',
  styleUrls: ['./click-count-list.component.css'],
  standalone: true,
  imports: [CommonModule] // Import CommonModule here
})
export class ClickCountListComponent {
  // Sample data: List of items with click counts
  items: ListItem[] = [
    { name: 'Item 1', clickCount: 0 },
    { name: 'Item 2', clickCount: 0 },
    { name: 'Item 3', clickCount: 0 },
    { name: 'Item 4', clickCount: 0 },
    { name: 'Item 5', clickCount: 0 },
  ];

  // Method to increment the click count for a specific item
  incrementClickCount(index: number): void {
    this.items[index].clickCount++;
  }
}
