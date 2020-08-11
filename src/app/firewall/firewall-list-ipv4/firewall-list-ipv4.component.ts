import { Component, OnInit, ViewChild } from '@angular/core';
import { FirewallService } from '../firewall.service';
import { Table } from 'primeng/table';
import { Firewall } from '../firewall';
@Component({
  selector: 'app-firewall-list-ipv4',
  templateUrl: './firewall-list-ipv4.component.html',
  styleUrls: ['./firewall-list-ipv4.component.scss'],
})
export class FirewallListIpv4Component implements OnInit {
  constructor(private firewallService: FirewallService) {}
  firewallrules: Firewall[];


  loading: boolean = true;

  @ViewChild('dt') table: Table;

  ngOnInit(): void {
    console.log('hello ');

    this.firewallService.getRules().then((rules) => {
      this.firewallrules = rules;
      this.loading = false;
    });

    
  }
  
}
