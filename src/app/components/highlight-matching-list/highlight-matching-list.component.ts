import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-highlight-matching-list',
  templateUrl: './highlight-matching-list.component.html',
  styleUrls: ['./highlight-matching-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Add FormsModule here
})
export class HighlightMatchingListComponent {
  items: string[] = ['Angular', 'React', 'Vue', 'Svelte', 'Ember'];
  searchTerm: string = '';

  isMatch(item: string): boolean {
    return item.toLowerCase().includes(this.searchTerm.toLowerCase());
  }
}
