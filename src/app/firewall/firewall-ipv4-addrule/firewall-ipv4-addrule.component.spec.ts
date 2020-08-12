import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirewallIpv4AddruleComponent } from './firewall-ipv4-addrule.component';

describe('FirewallIpv4AddruleComponent', () => {
  let component: FirewallIpv4AddruleComponent;
  let fixture: ComponentFixture<FirewallIpv4AddruleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirewallIpv4AddruleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirewallIpv4AddruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
