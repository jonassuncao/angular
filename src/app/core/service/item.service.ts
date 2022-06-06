import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private _items: Item[] = [];

  public get(): Item[] {
    return this._items;
  }

  public post(data: Item) {
    this._items.push(data);
  }

  public update(code: string, data: Item) {
    // TODO
  }

  public delete(code: string) {
    // TODO
  }
}
