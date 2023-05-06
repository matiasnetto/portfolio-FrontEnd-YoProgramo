import { Component, OnInit } from '@angular/core';
import {
  IExperienceItem,
  PortfolioService,
} from '../../../../services/portfolio.service';

@Component({
  selector: 'experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.css'],
})
export class ExperienceSectionComponent implements OnInit {
  experience: IExperienceItem[] = [];

  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio
      .getExperience()
      .subscribe((data) => (this.experience = data));
  }
}
