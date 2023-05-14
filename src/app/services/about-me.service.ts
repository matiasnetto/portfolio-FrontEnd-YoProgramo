import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BACKEND_URL } from 'src/config';
import { IAboutMe, IAboutMeOut } from '../models/about-me.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AboutMeService {
  private endpoint = BACKEND_URL + '/persons';
  private aboutMeData = new BehaviorSubject<IAboutMe | null>(null);

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthorizationHeaders() {
    return { Authorization: this.authService.getBearerAuthToken() };
  }

  public getAboutMe(): Observable<IAboutMe | null> {
    if (!this.aboutMeData.value) this.reloadAboutMeData();

    return this.aboutMeData.asObservable();
  }

  public reloadAboutMeData(): void {
    this.http
      .get<IAboutMe>(this.endpoint + '/1')
      .subscribe((data) => this.aboutMeData.next(data));
  }

  public updateAboutMe(aboutMeData: IAboutMeOut): Observable<IAboutMe> {
    return this.http.put<IAboutMe>(this.endpoint + '/1', aboutMeData, {
      headers: this.getAuthorizationHeaders(),
    });
  }
}
