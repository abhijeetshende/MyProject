import { Injectable } from '@angular/core';
import { Firewall } from './firewall';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class FirewallService {
  constructor(private http: HttpClient) {}
  getRules() {
    return this.http
      .get<any>('assets/firewall.json')
      .toPromise()
      .then((res) => <Firewall[]>res.data)
      .then((data) => {
        return data;
      });
  }

}
