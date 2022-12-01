import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IExperienceItem {
  img: string;
  title: string;
  description: string;
  role: string;
}

export interface IEducationItem {
  img: string;
  title: string;
  description: string;
  timeRange: string;
}

export interface ISkill {
  img: string;
  name: string;
  percentage: number;
}
export interface IProject {
  img: string;
  title: string;
  description: string;
  siteURL: string;
  codeURL: string;
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor(private http: HttpClient) {}

  getExperience(): Observable<IExperienceItem[]> {
    return this.http.get<IExperienceItem[]>('/assets/data/experience.json');
  }

  getEducation(): Observable<IEducationItem[]> {
    return this.http.get<IEducationItem[]>('/assets/data/education.json');
  }

  getSkills(): Observable<ISkill[]> {
    return this.http.get<ISkill[]>('/assets/data/skills.json');
  }

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>('/assets/data/projects.json');
  }
}
