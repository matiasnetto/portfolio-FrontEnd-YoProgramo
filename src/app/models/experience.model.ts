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
