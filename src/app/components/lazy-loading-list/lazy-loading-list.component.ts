import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lazy-loading-list',
  templateUrl: './lazy-loading-list.component.html',
  styleUrls: ['./lazy-loading-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class LazyLoadingListComponent implements OnInit {
  // List of items that will be displayed lazily
  items: string[] = [];
  allItems: string[] = [];
  batchSize = 10; // Number of items to load at a time

  @ViewChild('scrollAnchor', { static: false }) scrollAnchor!: ElementRef; // Reference to the scroll anchor element
  observer!: IntersectionObserver; // Observer for lazy loading

  constructor() {
    // Create a large dataset for demonstration purposes
    for (let i = 1; i <= 100; i++) {
      this.allItems.push(`Item ${i}`);
    }
  }

  ngOnInit(): void {
    // Initially load a batch of items
    this.loadMoreItems();
  }

  ngAfterViewInit() {
    // Set up the IntersectionObserver to observe the scroll anchor
    this.observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this.loadMoreItems();
      }
    });
    this.observer.observe(this.scrollAnchor.nativeElement);
  }

  // Method to load more items
  loadMoreItems() {
    const nextItems = this.allItems.slice(this.items.length, this.items.length + this.batchSize);
    this.items = [...this.items, ...nextItems];

    // Stop observing if all items have been loaded
    if (this.items.length >= this.allItems.length) {
      this.observer.disconnect();
    }
  }
}
