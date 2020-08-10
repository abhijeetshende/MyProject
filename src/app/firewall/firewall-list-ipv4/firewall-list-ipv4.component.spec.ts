import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirewallListIpv4Component } from './firewall-list-ipv4.component';

describe('FirewallListIpv4Component', () => {
  let component: FirewallListIpv4Component;
  let fixture: ComponentFixture<FirewallListIpv4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirewallListIpv4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirewallListIpv4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
