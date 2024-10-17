import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Item {
  name: string;
  category: string; // Category of the item
}

@Component({
  selector: 'app-categorized-list',
  templateUrl: './categorized-list.component.html',
  styleUrls: ['./categorized-list.component.css'],
  standalone: true,
  imports: [CommonModule] // Import CommonModule here
})
export class CategorizedListComponent {
  // Sample data: List of items categorized
  items: Item[] = [
    { name: 'Apple', category: 'Fruits' },
    { name: 'Banana', category: 'Fruits' },
    { name: 'Broccoli', category: 'Vegetables' },
    { name: 'Carrot', category: 'Vegetables' },
    { name: 'Chicken', category: 'Meat' },
    { name: 'Salmon', category: 'Fish' },
    { name: 'Beef', category: 'Meat' },
  ];

  // Method to group items by category
  getGroupedItems() {
    return this.items.reduce((groups, item) => {
      (groups[item.category] = groups[item.category] || []).push(item);
      return groups;
    }, {} as { [key: string]: Item[] });
  }
}
