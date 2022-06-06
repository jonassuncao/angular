import { Component, Input } from '@angular/core';
import { Item } from 'src/app/core/models/item.model';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss'],
})
export class TableItemComponent {
  @Input() public items: Item[] = [];

  public hasItems(): boolean {
    return !!this.items.length;
  }
}
