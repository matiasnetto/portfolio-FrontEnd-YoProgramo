import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BACKEND_URL } from 'src/config';
import { ISkill } from '../models/skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  skillsData = new BehaviorSubject<ISkill[]>([]);

  constructor(private http: HttpClient) {}

  public getSkills(): Observable<ISkill[]> {
    if (this.skillsData.value.length == 0) this.updateSkillsData();

    return this.skillsData.asObservable();
  }

  //UPDATE

  private updateSkillsData(): void {
    this.http
      .get<ISkill[]>(BACKEND_URL + '/skills')
      .subscribe((data) => this.skillsData.next(data));
  }
}
