import { Injectable } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginStatusChanged = new Subject<boolean>();
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    this.loginStatusChanged.next(this.isLoggedIn);
    return of(true).pipe(
      delay(500),
      tap(val => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
