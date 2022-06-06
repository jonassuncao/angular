import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './pages/list/list.component';
import { TableItemComponent } from './components/table-item/table-item.component';


@NgModule({
  declarations: [
    ListComponent,
    TableItemComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
