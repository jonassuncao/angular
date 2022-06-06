import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { cloneDeep } from 'lodash';
import { EMPTY_ITEM, Item } from 'src/app/core/models/item.model';
import { User } from 'src/app/core/models/usuario.model';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss'],
})
export class ItemCreateComponent implements OnInit {
  public item: Item = cloneDeep(EMPTY_ITEM);
  public usuario: User;
  @Output() public newItem = new EventEmitter();

  constructor(private userService: UserService) {}

  public ngOnInit() {
    this.usuario = this.userService.usuario;
  }

  public onSave(data: Item) {
    this.newItem.emit(data);
  }
}
