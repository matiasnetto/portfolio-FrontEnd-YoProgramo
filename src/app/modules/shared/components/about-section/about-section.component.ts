import { Component, OnInit } from '@angular/core';
import { IAboutMe, PortfolioService } from 'src/app/services/portfolio.service';
import { BASE_URL } from 'src/config';

@Component({
  selector: 'about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css'],
})
export class AboutSectionComponent implements OnInit {
  data: IAboutMe | null = null;

  constructor(private service: PortfolioService) {}
  ngOnInit(): void {
    this.service.getAboutMe().subscribe((data) => (this.data = data));
  }
}
