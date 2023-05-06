export interface ISkill {
  id: number;
  technology: string;
  image_url: string;
  percent: number;
  ord: number;
}

export interface ISkillOut {
  id?: number;
  technology: string;
  image_url: string;
  percent: number;
  ord: number;
}
