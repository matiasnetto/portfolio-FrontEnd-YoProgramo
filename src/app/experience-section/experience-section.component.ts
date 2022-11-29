import { Component } from '@angular/core';

export interface IExperienceItem {
  img: string;
  title: string;
  description: string;
  role: string;
}

@Component({
  selector: 'experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.css'],
})
export class ExperienceSectionComponent {
  experience: IExperienceItem[] = [
    {
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F07%2F10%2F119930_google_512x512.png&f=1&nofb=1&ipt=51cb0b840d5df7d05ee3b31b3a3a629ef5293e90a7c4e2bd753eda624a9167be&ipo=images',

      title: 'Empresa 1',
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content. ",
      role: 'Junior Frontend Developer',
    },
    {
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F07%2F10%2F119930_google_512x512.png&f=1&nofb=1&ipt=51cb0b840d5df7d05ee3b31b3a3a629ef5293e90a7c4e2bd753eda624a9167be&ipo=images',

      title: 'Empresa 2',
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content. ",
      role: 'Junior Frontend Developer',
    },
    {
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F07%2F10%2F119930_google_512x512.png&f=1&nofb=1&ipt=51cb0b840d5df7d05ee3b31b3a3a629ef5293e90a7c4e2bd753eda624a9167be&ipo=images',

      title: 'Empresa 3',
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content. ",
      role: 'Junior Frontend Developer',
    },
  ];
}
