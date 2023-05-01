import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/config';
import { ISkill, PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css'],
})
export class SkillsSectionComponent implements OnInit {
  skills: ISkill[] = [];
  BASE_URL = BASE_URL;

  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.getSkills().subscribe((data) => (this.skills = data));
  }
}
