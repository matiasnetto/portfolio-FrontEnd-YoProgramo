import { Component } from '@angular/core';

interface IEducationItem {
  img: string;
  title: string;
  description: string;
  timeRange: string;
}

@Component({
  selector: 'education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css'],
})
export class EducationSectionComponent {
  education: IEducationItem[] = [
    {
      img: '/assets/argentina-programa-logo.jpeg',
      title: '#SeProgramar',
      description:
        ' This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ',
      timeRange: 'Junio 2022 - Agosto 2022',
    },
    {
      img: '/assets/unq-logo.jpeg',
      title: 'Lic. Informatica',
      description:
        ' This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ',
      timeRange: '2020 - Actualidad',
    },
  ];
}
