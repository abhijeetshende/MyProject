import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirewallRoutingModule } from './firewall-routing.module';
import { FirewallListComponent } from './firewall-list/firewall-list.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FirewallListIpv4Component } from './firewall-list-ipv4/firewall-list-ipv4.component';

@NgModule({
  declarations: [FirewallListComponent, FirewallListIpv4Component],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    FirewallRoutingModule
  ]
})
export class FirewallModule { }
