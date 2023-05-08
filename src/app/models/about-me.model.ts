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

export interface IAboutMeOut {
  id?: number;
  name: string;
  description: string;
  nationality: string;
  mail: string;
  occupation: string;
  background_img_header_url: string;
  profile_img_url: string;
  date_of_birth: Date;
}
