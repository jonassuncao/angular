import { Injectable } from '@angular/core';
import { User } from '../models/usuario.model';
import { cloneDeep } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _usuario: User;

  public get usuario(): User {
    return cloneDeep(this._usuario);
  }

  public signin(data: User) {
    this._usuario = data;
  }

  public hasUser(): boolean {
    return !!this._usuario;
  }
}
