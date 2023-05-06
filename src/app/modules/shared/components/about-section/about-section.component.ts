import { Component, OnInit } from '@angular/core';
import { IAboutMe } from 'src/app/models/about-me.model';
import { AboutMeService } from 'src/app/services/about-me.service';

@Component({
  selector: 'about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css'],
})
export class AboutSectionComponent implements OnInit {
  data: IAboutMe | null = null;

  constructor(private service: AboutMeService) {}
  ngOnInit(): void {
    this.service.getAboutMe().subscribe((data) => (this.data = data));
  }
}
