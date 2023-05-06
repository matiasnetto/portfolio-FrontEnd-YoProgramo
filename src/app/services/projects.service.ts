import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BACKEND_URL } from 'src/config';
import { IProject } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projectsData = new BehaviorSubject<IProject[]>([]);

  constructor(private http: HttpClient) {}

  public getProjects(): Observable<IProject[]> {
    if (this.projectsData.value.length == 0) this.updateProjectsData();

    return this.projectsData.asObservable();
  }

  // UPDATES

  private updateProjectsData(): void {
    this.http
      .get<IProject[]>(BACKEND_URL + '/projects')
      .subscribe((data) => this.projectsData.next(data));
  }
}
