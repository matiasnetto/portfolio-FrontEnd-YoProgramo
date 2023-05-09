import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BACKEND_URL } from 'src/config';
import {
  IExperienceItem,
  IExperienceItemOut,
} from '../models/experience.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private endpoint = BACKEND_URL + '/experience';
  private experienceData = new BehaviorSubject<IExperienceItem[]>([]);

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthorizationHeaders() {
    return { Authorization: this.authService.getBearerAuthToken() };
  }

  public getExperience(): Observable<IExperienceItem[]> {
    if (this.experienceData.value.length == 0) this.reloadExperienceData();

    return this.experienceData.asObservable();
  }

  public getExperienceById(id: number): Observable<IExperienceItem> {
    return this.http.get<IExperienceItem>(this.endpoint + '/' + id);
  }

  public createNewExperience(experience: IExperienceItemOut) {
    return this.http.post<IExperienceItem>(this.endpoint, experience, {
      headers: this.getAuthorizationHeaders(),
    });
  }
  public updateExperience(
    experience: IExperienceItemOut
  ): Observable<IExperienceItem> {
    return this.http.put<IExperienceItem>(
      this.endpoint + '/' + experience.id,
      experience,
      {
        headers: this.getAuthorizationHeaders(),
      }
    );
  }

  public deleteExperience(experience: IExperienceItem): Observable<Object> {
    return this.http.delete(this.endpoint + '/' + experience.id);
  }

  //UPDATE
  public reloadExperienceData(): void {
    this.http
      .get<IExperienceItem[]>(this.endpoint)
      .subscribe((data) => this.experienceData.next(data));
  }
}
