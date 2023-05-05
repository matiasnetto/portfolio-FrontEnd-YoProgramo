import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BASE_URL } from 'src/config';

export interface IExperienceItem {
  id: number;
  enterprise_name: string;
  job: string;
  description: string;
  image_url: string;
  started_at: Date;
  end_at: Date | null;
  ord: number;
}

export interface IEducationItem {
  id: number;
  title: string;
  institute: string;
  image_url: string;
  started_at: Date;
  end_at: Date;
  ord: number;
}

export interface ISkill {
  id: number;
  technology: string;
  image_url: string;
  percent: number;
  ord: number;
}

export interface IProject {
  id: number;
  title: string;
  image_url: string;
  end_at: Date;
  description: string;
  project_url: string;
  github_url: string;
  ord: number;
  technologies: ISkill[];
}

interface ISocialMedia {
  id: number;
  name: string;
  url: string;
  img: string;
}

export interface IAboutMe {
  id: number;
  name: string;
  description: string;
  nationality: string;
  mail: string;
  occupation: string;
  background_img_header_url: string;
  profile_img_url: string;
  date_of_birth: Date;
  social_media: ISocialMedia[];
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private BACKEND_URL: string = 'http://192.168.1.40:3000/api';
  aboutMeData = new BehaviorSubject<IAboutMe | null>(null);
  experienceData = new BehaviorSubject<IExperienceItem[]>([]);
  educationData = new BehaviorSubject<IEducationItem[]>([]);
  skillsData = new BehaviorSubject<ISkill[]>([]);
  projectsData = new BehaviorSubject<IProject[]>([]);

  constructor(private http: HttpClient) {}

  public getAboutMe(): Observable<IAboutMe | null> {
    if (!this.aboutMeData.value) this.updateAboutMeData();

    return this.aboutMeData.asObservable();
  }

  public getExperience(): Observable<IExperienceItem[]> {
    if (this.experienceData.value.length == 0) this.updateExperienceData();

    return this.experienceData.asObservable();
  }

  public getEducation(): Observable<IEducationItem[]> {
    if (this.educationData.value.length == 0) this.updateEducationData();

    return this.educationData.asObservable();
  }

  public getSkills(): Observable<ISkill[]> {
    if (this.skillsData.value.length == 0) this.updateSkillsData();

    return this.skillsData.asObservable();
  }

  public getProjects(): Observable<IProject[]> {
    if (this.projectsData.value.length == 0) this.updateProjectsData();

    return this.projectsData.asObservable();
  }

  // UPDATES

  public refreshAllData(): void {
    this.updateAboutMeData();
    this.updateEducationData();
    this.updateExperienceData();
    this.updateSkillsData();
    this.updateProjectsData();
  }

  private updateAboutMeData(): void {
    this.http
      .get<IAboutMe>(this.BACKEND_URL + '/persons/1')
      .subscribe((data) => this.aboutMeData.next(data));
  }

  private updateExperienceData(): void {
    this.http
      .get<IExperienceItem[]>(this.BACKEND_URL + '/experience')
      .subscribe((data) => this.experienceData.next(data));
  }

  private updateEducationData(): void {
    this.http
      .get<IEducationItem[]>(this.BACKEND_URL + '/education')
      .subscribe((data) => this.educationData.next(data));
  }

  private updateSkillsData(): void {
    this.http
      .get<ISkill[]>(this.BACKEND_URL + '/skills')
      .subscribe((data) => this.skillsData.next(data));
  }

  private updateProjectsData(): void {
    this.http
      .get<IProject[]>(this.BACKEND_URL + '/projects')
      .subscribe((data) => this.projectsData.next(data));
  }
}
