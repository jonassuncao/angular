import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/core/models/usuario.model';

const EMPTY_USER: User = {
  username: undefined,
  password: undefined,
};

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent {
  public user: User = EMPTY_USER;
  @Output() public signIn = new EventEmitter();

  public onSignIn(data: User) {
    this.signIn.emit(data);
  }
}
