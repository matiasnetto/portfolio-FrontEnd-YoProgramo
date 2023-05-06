import { ISkill } from './skill.model';

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
