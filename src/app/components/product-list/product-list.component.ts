import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

interface Product {
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [FormsModule, CommonModule], // Add FormsModule and CommonModule here
})
export class ProductListComponent {
  newProductName: string = ''; // Variable for new product name input
  newProductPrice: number | null = null; // Variable for new product price input
  products: Product[] = []; // Array to hold products

  // Function to add a new product to the list
  addProduct() {
    const trimmedName = this.newProductName.trim(); // Trim whitespace from input
    if (trimmedName && this.newProductPrice !== null) { // Check if inputs are valid
      const newProduct: Product = {
        name: trimmedName,
        price: this.newProductPrice,
      };
      console.log('Adding product:', newProduct); // Log the new product
      this.products.push(newProduct); // Add to the array
      this.newProductName = ''; // Clear the product name input
      this.newProductPrice = null; // Clear the product price input
      console.log('Current products:', this.products); // Log the current state of products
    } else {
      console.log('Please enter valid product details'); // Log if inputs are invalid
    }
  }

  // Function to remove a product from the list
  removeProduct(index: number) {
    const removedProduct = this.products.splice(index, 1); // Remove the product
    console.log('Removed product:', removedProduct); // Log the removed product
    console.log('Current products:', this.products); // Log the current state of products
  }
}
