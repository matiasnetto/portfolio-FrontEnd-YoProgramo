import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/config';
import {
  IEducationItem,
  PortfolioService,
} from '../../services/portfolio.service';

@Component({
  selector: 'education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css'],
})
export class EducationSectionComponent implements OnInit {
  education: IEducationItem[] = [];
  BASE_URL = BASE_URL;

  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio
      .getEducation()
      .subscribe((data) => (this.education = data));
  }
}
