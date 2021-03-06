import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
    ) { }
  setToken(token) {
    this.cookieService.set('Token', token);
  }
  getToken() {
    return this.cookieService.get('Token');
  }
  getUsername() {
    return this.http.get<any>(`${environment.apiUrl}/api/users/get_user_info/`);
  }
  login(loginData) {
    return this.http.post<any>(`${environment.apiUrl}/auth/`, loginData).pipe(
      tap( data => this.setToken(data.token)),
      tap( data => this.router.navigate(['notes'])),
    );
  }
  logout() {
    this.cookieService.delete('Token');
    this.router.navigate(['auth/login']);
  }
  register(registerData) {
    return this.http.post(`${environment.apiUrl}/api/users/`, registerData).pipe(
      tap( () => this.router.navigate(['auth/login'], {queryParams: { registered: 'true' } }))
    );
  }
}
