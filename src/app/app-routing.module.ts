import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendorComponent } from './vendor/vendor.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [ 
  { path: '', component: LoginComponent },
  { path: 'home', component: SidenavComponent, children: [
    {
      path:'', component: DashboardComponent
    },
    {
      path:'dashboard', component: DashboardComponent
    },    
    {
      path:'vendor', component: VendorComponent
    },
    {
      path:'stock', component: StockComponent
    },
    {
      path:'purchase', component: PurchaseComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
