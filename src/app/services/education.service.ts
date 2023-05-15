import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, retry, retryWhen } from 'rxjs';
import { BACKEND_URL } from 'src/config';
import { IEducationItem, IEducationItemOut } from '../models/education.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private educationData = new BehaviorSubject<IEducationItem[]>([]);
  private endpoint = BACKEND_URL + '/education';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthorizationHeaders() {
    return { Authorization: this.authService.getBearerAuthToken() };
  }

  public getEducation(): Observable<IEducationItem[]> {
    if (this.educationData.value.length == 0) this.reloadEducationData();

    return this.educationData.asObservable();
  }

  public getEducationById(id: number): Observable<IEducationItem> {
    return this.http.get<IEducationItem>(this.endpoint + '/' + id);
  }

  public createNewEducation(
    education: IEducationItemOut
  ): Observable<IEducationItem> {
    return this.http.post<IEducationItem>(this.endpoint, education, {
      headers: this.getAuthorizationHeaders(),
    });
  }

  public updateEducation(
    education: IEducationItemOut
  ): Observable<IEducationItem> {
    return this.http.put<IEducationItem>(
      this.endpoint + '/' + education.id,
      education,
      { headers: this.getAuthorizationHeaders() }
    );
  }

  public deleteEducation(id: number): Observable<Object> {
    return this.http.delete(this.endpoint + '/' + id, {
      headers: this.getAuthorizationHeaders(),
    });
  }

  public reloadEducationData(): void {
    this.http
      .get<IEducationItem[]>(this.endpoint)
      .pipe(retryWhen((err) => err.pipe(delay(5000))))
      .subscribe((data) => this.educationData.next(data));
  }
}
