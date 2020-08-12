import { Component, OnInit, ViewChild, Input } from '@angular/core';
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
  cols: any[];
  _selectedColumns: any[];
  filteredChips:string[];
  loading: boolean = true;

  @ViewChild('dt') table: Table;

  ngOnInit(): void {
    console.log('hello ');

    this.firewallService.getRules().then((rules) => {
      this.firewallrules = rules;
      this.loading = false;
    });

    this.cols = [
      { field:'RuleName',header:'RuleName'},
      { field:'Source',header:'Source'},
      { field:'Destination',header:'Destination'},
      { field:'Schedule',header:'Schedule'},
      { field:'Services',header:'Services'},
      { field:'Action',header:'Action'}
    ];
    this._selectedColumns = this.cols;
  }
  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }
  set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.cols.filter((col) => val.includes(col));
    this.filteredChips = this.cols.map((col)=> col.field);
  }
}
