import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bulleted-list',
  templateUrl: './bulleted-list.component.html',
  styleUrls: ['./bulleted-list.component.css'],
  standalone: true,
  imports: [CommonModule] // Import CommonModule here
})
export class BulletedListComponent {
  // Sample data: List of items
  items: string[] = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ];
}
