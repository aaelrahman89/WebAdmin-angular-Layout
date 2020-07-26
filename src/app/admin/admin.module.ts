import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminUserComponent } from './components/admin-user/admin-user.component';

const routes: Routes = [
  { path: '', component: AdminMainComponent,
  children: [
    { path: 'users', component: AdminUsersComponent },
    { path: 'user', component: AdminUserComponent }
  ]
  }
]

@NgModule({
  declarations: [AdminMainComponent, AdminUsersComponent, AdminUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
