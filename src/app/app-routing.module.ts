import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [ 
  { path: '', component: LoginComponent },
  { path: 'home', component: SidenavComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
