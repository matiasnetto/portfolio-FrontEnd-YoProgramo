export interface IEducationItem {
  id: number;
  title: string;
  institute: string;
  image_url: string;
  started_at: Date;
  end_at: Date;
  ord: number;
}

export interface IEducationItemOut {
  id?: number;
  title: string;
  institute: string;
  image_url: string;
  started_at: Date;
  end_at: Date;
  ord: number;
}
