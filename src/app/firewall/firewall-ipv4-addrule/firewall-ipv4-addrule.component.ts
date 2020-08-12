import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-firewall-ipv4-addrule',
  templateUrl: './firewall-ipv4-addrule.component.html',
  styleUrls: ['./firewall-ipv4-addrule.component.scss'],
})
export class FirewallIpv4AddruleComponent implements OnInit {
  constructor() {}
  items: MenuItem[];

  home: MenuItem;
  ngOnInit(): void {
    this.items = [
      { label: 'Firewall Rules ' },
      {
        label: 'IPv4',
      },
      {
        label: 'Add Firewall Rule',
      },
    ];
    this.home = { icon: 'pi pi-arrow-left' };
  }
}
