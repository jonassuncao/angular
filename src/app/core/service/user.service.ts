import { Injectable } from '@angular/core';
import { User } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _usuario: User;

  public signin(data: User) {
    this._usuario = data;
  }

  public hasUser(): boolean {
    return !!this._usuario;
  }
}
