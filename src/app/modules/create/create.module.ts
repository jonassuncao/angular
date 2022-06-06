import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { ItemCreateComponent } from './components/item-create/item-create.component';


@NgModule({
  declarations: [
    CreateComponent,
    ItemCreateComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule
  ]
})
export class CreateModule { }
