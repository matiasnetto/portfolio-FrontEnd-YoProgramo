import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BACKEND_URL } from 'src/config';
import { IAboutMe } from '../models/about-me.model';

@Injectable({
  providedIn: 'root',
})
export class AboutMeService {
  aboutMeData = new BehaviorSubject<IAboutMe | null>(null);
  constructor(private http: HttpClient) {}

  public getAboutMe(): Observable<IAboutMe | null> {
    if (!this.aboutMeData.value) this.updateAboutMeData();

    return this.aboutMeData.asObservable();
  }

  private updateAboutMeData(): void {
    this.http
      .get<IAboutMe>(BACKEND_URL + '/persons/1')
      .subscribe((data) => this.aboutMeData.next(data));
  }
}
