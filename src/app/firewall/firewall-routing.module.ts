import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirewallListComponent } from './firewall-list/firewall-list.component';
import { FirewallIpv4AddruleComponent } from './firewall-ipv4-addrule/firewall-ipv4-addrule.component';

const routes: Routes = [{
  path:'firewall-list',
  component:FirewallListComponent,
}
,
{
  path:'firewall-ipv4-add',
  component:FirewallIpv4AddruleComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirewallRoutingModule { }
