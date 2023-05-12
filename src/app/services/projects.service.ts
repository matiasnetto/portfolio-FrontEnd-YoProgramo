import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BACKEND_URL } from 'src/config';
import { IProject, IProjectOut } from '../models/project.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projectsData = new BehaviorSubject<IProject[]>([]);
  private endpoint = BACKEND_URL + '/projects';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthorizationHeaders() {
    return { Authorization: this.authService.getBearerAuthToken() };
  }

  public getAllProjects(): Observable<IProject[]> {
    if (this.projectsData.value.length == 0) this.reloadProjectsData();

    return this.projectsData.asObservable();
  }

  public getProjectById(id: number): Observable<IProject> {
    return this.http.get<IProject>(this.endpoint + '/' + id);
  }

  public createNewProject(project: IProjectOut): Observable<IProject> {
    const body = {
      title: project.title,
      image_url: project.image_url,
      end_at: project.end_at,
      description: project.description,
      project_url: project.project_url,
      github_url: project.github_url,
      ord: project.ord,
      technologies_ids: project.technologies.map((el) => el.id),
    };

    return this.http.post<IProject>(this.endpoint, body, {
      headers: this.getAuthorizationHeaders(),
    });
  }

  public updateProject(project: IProjectOut): Observable<IProject> {
    const body = {
      id: project.id,
      title: project.title,
      image_url: project.image_url,
      end_at: project.end_at,
      description: project.description,
      project_url: project.project_url,
      github_url: project.github_url,
      ord: project.ord,
      technologies_ids: project.technologies.map((el) => el.id),
    };

    return this.http.put<IProject>(this.endpoint + '/' + project.id, body, {
      headers: this.getAuthorizationHeaders(),
    });
  }

  public deleteProject(project: IProject): Observable<Object> {
    return this.http.delete(this.endpoint + '/' + project.id, {
      headers: this.getAuthorizationHeaders(),
    });
  }

  // UPDATES

  public reloadProjectsData(): void {
    this.http
      .get<IProject[]>(this.endpoint)
      .subscribe((data) => this.projectsData.next(data));
  }
}
