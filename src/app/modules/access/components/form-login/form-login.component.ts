import { Component, EventEmitter, Output } from '@angular/core';
import { EMPTY_USER, User } from 'src/app/core/models/usuario.model';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
})
export class FormLoginComponent {
  public user: User = EMPTY_USER;
  @Output() public signIn = new EventEmitter();

  public onSignIn(data: User) {
    this.signIn.emit(data);
  }
}
