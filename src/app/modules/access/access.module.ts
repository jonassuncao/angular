import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccessRoutingModule } from './access-routing.module';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  imports: [CommonModule, FormsModule, AccessRoutingModule],
  declarations: [LoginComponent, FormLoginComponent],
})
export class AccessModule {}
