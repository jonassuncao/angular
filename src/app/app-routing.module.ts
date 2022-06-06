import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/access/access.module').then((m) => m.AccessModule),
  },
  {
    path: 'home',
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'listagem',
        loadChildren: () =>
          import('./modules/list/list.module').then((m) => m.ListModule),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./modules/create/create.module').then((m) => m.CreateModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
