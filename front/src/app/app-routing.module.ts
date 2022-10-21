import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { LoginAComponent } from './login-a/login-a.component';
import { AuthGardService } from './service/auth-gard.service';


const routes: Routes = [
  { path: "", component: LoginAComponent },
  { path: "admin", component: AdminComponent, canActivate: [AuthGardService] },
  { path: "client", component: ClientComponent, canActivate: [AuthGardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
