import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from './product.models';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent {
  listProducts: Product[] = [
    { id: 1, name: 'Banane', prix: 2, promo: 11 },
    { id: 2, name: 'Pomme', prix: 3, promo: 15 },
    { id: 2, name: 'Poire', prix: 4, promo:0 },
  ];

  trackByProductId(id: number, product: Product): number {
    return product.id;
}
}
