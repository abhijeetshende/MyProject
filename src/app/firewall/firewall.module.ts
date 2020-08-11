import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirewallRoutingModule } from './firewall-routing.module';
import { FirewallListComponent } from './firewall-list/firewall-list.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FirewallListIpv4Component } from './firewall-list-ipv4/firewall-list-ipv4.component';

import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FirewallListComponent, FirewallListIpv4Component],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    FirewallRoutingModule,
    HttpClientModule,
    TableModule,
    MultiSelectModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FirewallModule {}
