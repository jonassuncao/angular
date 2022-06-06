import { NgModule } from '@angular/core';
import { ItemService } from './item.service';
import { UserService } from './user.service';

@NgModule({
  providers: [UserService, ItemService],
})
export class ServiceModule {}
