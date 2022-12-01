import { Component, OnInit } from '@angular/core';
import { ISkill, PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css'],
})
export class SkillsSectionComponent implements OnInit {
  skills: ISkill[] = [];

  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.getSkills().subscribe((data) => (this.skills = data));
  }
}
