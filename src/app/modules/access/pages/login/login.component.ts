import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/usuario.model';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private router: Router, private userService: UserService) {}

  public onSignIn(data: User) {
    this.userService.signin(data);
    this.router.navigate(['home/listagem']);
  }
}
