import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/core/models/item.model';
import { ItemService } from 'src/app/core/service/item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public items: Item[] = [];

  constructor(private itemService: ItemService) {}

  public ngOnInit() {
    this.items = this.itemService.get();
  }
}
