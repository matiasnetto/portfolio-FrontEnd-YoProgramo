import { Component, OnInit } from '@angular/core';
import {
  IProject,
  PortfolioService,
} from '../../../../services/portfolio.service';

@Component({
  selector: 'projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css'],
})
export class ProjectsSectionComponent implements OnInit {
  projects: IProject[] = [];

  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.getProjects().subscribe((data) => {
      console.log(data);
      this.projects = data;
    });
  }
}
