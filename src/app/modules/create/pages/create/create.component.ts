import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/core/models/item.model';
import { ItemService } from 'src/app/core/service/item.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  constructor(private router: Router, private itemService: ItemService) {}

  public onNewItem(data: Item) {
    this.itemService.post(data);
    this.router.navigate(['home/listagem']);
  }
}
