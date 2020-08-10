import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirewallListComponent } from './firewall-list/firewall-list.component';

const routes: Routes = [{
  path:'firewall',
  component:FirewallListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirewallRoutingModule { }
