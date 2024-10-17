import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-nested-list',
  standalone: true,
  templateUrl: './nested-list.component.html',
  styleUrls: ['./nested-list.component.css'],
  imports: [CommonModule], // Add CommonModule here
})
export class NestedListComponent {
  // Define a nested array structure
  nestedItems = [
    {
      name: 'Item 1',
      children: [
        { name: 'Subitem 1.1' },
        { name: 'Subitem 1.2', children: [{ name: 'Subitem 1.2.1' }] },
      ],
    },
    {
      name: 'Item 2',
      children: [
        { name: 'Subitem 2.1' },
        { name: 'Subitem 2.2' },
      ],
    },
    {
      name: 'Item 3',
    },
  ];
}
