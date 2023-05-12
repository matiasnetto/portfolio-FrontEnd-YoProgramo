import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { BACKEND_URL } from 'src/config';

interface ILoginData {
  user: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private endpoint = BACKEND_URL;
  private loginData: ILoginData | null = null;

  constructor(private http: HttpClient) {}

  public logIn(username: string, password: string) {
    console.log(username, password);
    return this.http
      .post<{ token: string }>(this.endpoint + '/login', {
        username,
        password,
      })
      .pipe(
        tap({
          next: (val) => {
            this.setLoginData(username, val.token);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            console.log('Login success');
          },
        })
      );
  }

  get isLogedIn() {
    return this.loginData != null;
  }

  private setLoginData(user: string, token: string) {
    this.loginData = { user: user, token: token };
  }

  public logOut() {
    this.loginData = null;
  }

  public getBearerAuthToken(): string {
    return this.loginData?.token ?? '';
  }
}
