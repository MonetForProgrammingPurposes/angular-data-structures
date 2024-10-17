import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bg-color-change-on-hover',
  templateUrl: './bg-color-change-on-hover.component.html',
  styleUrls: ['./bg-color-change-on-hover.component.css'],
  standalone: true,
  imports: [CommonModule] // Import CommonModule here
})
export class BgColorChangeOnHoverComponent {
  // Sample data: List of items
  items: string[] = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ];
}
