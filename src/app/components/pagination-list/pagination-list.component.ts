import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-pagination-list',
  standalone: true,
  templateUrl: './pagination-list.component.html',
  styleUrls: ['./pagination-list.component.css'],
  imports: [CommonModule], // Add CommonModule here
})
export class PaginationListComponent {
  items: string[] = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`); // Example items
  itemsPerPage: number = 10; // Number of items to display per page
  currentPage: number = 1; // Current page

  get totalPages(): number {
    return Math.ceil(this.items.length / this.itemsPerPage); // Calculate total pages
  }

  get paginatedItems(): string[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage; // Calculate start index
    return this.items.slice(startIndex, startIndex + this.itemsPerPage); // Return sliced array
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return; // Check for valid page
    this.currentPage = page; // Update current page
  }
}
