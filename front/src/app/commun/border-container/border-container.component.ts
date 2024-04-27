import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-border-container',
  templateUrl: './border-container.component.html',
  styleUrl: './border-container.component.css',
})
export class BorderContainerComponent {
  @Input() titre: string | undefined;
}
