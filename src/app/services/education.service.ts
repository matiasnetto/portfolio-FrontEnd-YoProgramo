import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BACKEND_URL } from 'src/config';
import { IEducationItem } from '../models/education.model';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  educationData = new BehaviorSubject<IEducationItem[]>([]);
  constructor(private http: HttpClient) {}

  public getEducation(): Observable<IEducationItem[]> {
    if (this.educationData.value.length == 0) this.updateEducationData();

    return this.educationData.asObservable();
  }

  private updateEducationData(): void {
    this.http
      .get<IEducationItem[]>(BACKEND_URL + '/education')
      .subscribe((data) => this.educationData.next(data));
  }
}
