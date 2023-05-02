import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  private BACKEND_URL: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getAboutMe(): Observable<IAboutMe> {
    return this.http.get<IAboutMe>(this.BACKEND_URL + '/persons/1');
  }

  getExperience(): Observable<IExperienceItem[]> {
    return this.http.get<IExperienceItem[]>(this.BACKEND_URL + '/experience');
  }

  getEducation(): Observable<IEducationItem[]> {
    return this.http.get<IEducationItem[]>(this.BACKEND_URL + '/education');
  }

  getSkills(): Observable<ISkill[]> {
    return this.http.get<ISkill[]>(this.BACKEND_URL + '/skills');
  }

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.BACKEND_URL + '/projects');
  }
}
