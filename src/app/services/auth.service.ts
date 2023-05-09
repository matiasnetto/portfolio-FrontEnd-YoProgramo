import { EventEmitter, Injectable } from '@angular/core';

interface ILoginData {
  user: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginData: ILoginData | null = null;
  $isLogedIn = new EventEmitter<boolean>(true);

  constructor() {}

  public logIn(user: string, password: string) {
    this.loginData = { user: user, token: 'abc123' };
    this.$isLogedIn.emit(true);
    return this.loginData;
  }

  public logOut() {
    this.loginData = null;
    this.$isLogedIn.emit(false);
  }

  public getBearerAuthToken(): string {
    return this.loginData?.token ?? '';
  }
}
