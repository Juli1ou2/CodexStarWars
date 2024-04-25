import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-button',
  templateUrl: './category-button.component.html',
  styleUrl: './category-button.component.css',
})
export class CategoryButtonComponent {
  @Input() route: string | undefined;
  @Input() image: string | undefined;
  @Input() titre: string | undefined;
}
