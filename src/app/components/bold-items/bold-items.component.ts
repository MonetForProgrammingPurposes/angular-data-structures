import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bold-items',
  templateUrl: './bold-items.component.html',
  styleUrls: ['./bold-items.component.css'],
  standalone: true,
  imports: [CommonModule] // Import CommonModule here
})
export class BoldItemsComponent {
  // Sample data: List of items
  items: string[] = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ];
}
