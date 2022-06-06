import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemCreateComponent } from './components/item-create/item-create.component';
import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './pages/create/create.component';

@NgModule({
  imports: [CommonModule, FormsModule, CreateRoutingModule],
  declarations: [CreateComponent, ItemCreateComponent],
})
export class CreateModule {}
