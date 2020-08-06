import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'create-user',
    component: CreateUserComponent
  },
  {
    path: 'view-users',
    component: ViewUsersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
