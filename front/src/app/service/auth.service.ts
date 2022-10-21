import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedUser!: string;
  public isloggedIn!: Boolean;
  public isauth: any;
  public token!: string;
  public user!: any;


  constructor(private http: HttpClient, private router: Router) { }
  saveToken(jwt: string) {
    localStorage.setItem('Token', jwt);
    this.token = jwt;
  }
  public getToken() {
    return localStorage.getItem('jwt');

  }
  public getUser() {
    const token = this.getToken()
    if (token) {
      return jwt_decode(token)
    }
  }

  logout() {
    this.isloggedIn = false
    this.router.navigate(['/']);
  }
  login(user: any): Observable<any> {
    const apiUrl = "http://localhost:3000/user/login";
    this.isloggedIn = true;

    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    return this.http.post<any>(apiUrl, user)
  }

  signup(users: User): Observable<User> {
    const Url = "http://localhost:3000/user/inscrit_user"
    console.log("service", users)
    return this.http.post<User>(Url, users)
  }

}
