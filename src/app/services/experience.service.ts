import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BACKEND_URL } from 'src/config';
import { IExperienceItem } from '../models/experience.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  experienceData = new BehaviorSubject<IExperienceItem[]>([]);
  constructor(private http: HttpClient) {}

  public getExperience(): Observable<IExperienceItem[]> {
    if (this.experienceData.value.length == 0) this.updateExperienceData();

    return this.experienceData.asObservable();
  }

  //UPDATE
  private updateExperienceData(): void {
    this.http
      .get<IExperienceItem[]>(BACKEND_URL + '/experience')
      .subscribe((data) => this.experienceData.next(data));
  }
}
