import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BACKEND_URL } from 'src/config';
import { ISkill, ISkillOut } from '../models/skill.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private endpoint = BACKEND_URL + '/skills';
  private skillsData = new BehaviorSubject<ISkill[]>([]);

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthorizationHeaders() {
    return { Authorization: this.authService.getBearerAuthToken() };
  }

  public getAllSkills(): Observable<ISkill[]> {
    if (this.skillsData.value.length == 0) this.reloadSkillsData();

    return this.skillsData.asObservable();
  }

  public getSkillById(id: number): Observable<ISkill> {
    return this.http.get<ISkill>(this.endpoint + '/' + id);
  }

  public createNewSkill(skill: ISkillOut): Observable<ISkill> {
    return this.http.post<ISkill>(this.endpoint, skill, {
      headers: this.getAuthorizationHeaders(),
    });
  }

  public updateSkill(
    skillData: ISkillOut,
    skillId: number
  ): Observable<ISkill> {
    return this.http.put<ISkill>(this.endpoint + '/' + skillId, skillData, {
      headers: this.getAuthorizationHeaders(),
    });
  }

  public deleteSkill(skillId: number): Observable<Object> {
    return this.http.delete(this.endpoint + '/' + skillId, {
      headers: this.getAuthorizationHeaders(),
    });
  }

  //UPDATE

  public reloadSkillsData(): void {
    this.http
      .get<ISkill[]>(this.endpoint)
      .subscribe((data) => this.skillsData.next(data));
  }
}
