import { Injectable } from '@angular/core';
import { Customer } from "./Customer";
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
      .then((res) =>res.data)
      .then((data) => {
        return data;
      });
  }
  getCustomersLarge() {
    return this.http.get<any>('assets/customer-large.json')
        .toPromise()
        .then(res => <Customer[]>res.data)
        .then(data => { return data; });
}
}
