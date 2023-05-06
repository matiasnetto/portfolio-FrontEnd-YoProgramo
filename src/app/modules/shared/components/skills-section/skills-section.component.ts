import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {
  ISkill,
  PortfolioService,
} from '../../../../services/portfolio.service';

@Component({
  selector: 'skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css'],
})
export class SkillsSectionComponent implements OnInit {
  skills: ISkill[] = [];
  editMode: boolean = false;
  openModal = false;

  constructor(
    private datosPortfolio: PortfolioService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.$isLogedIn.subscribe((data) => (this.editMode = data));
    this.datosPortfolio.getSkills().subscribe((data) => (this.skills = data));
  }

  openNewSkillsModal() {
    this.router.navigate(['admin', 'add-skill']);
  }

  openUpdateSkillsModal(skillId: number) {
    this.router.navigate(['admin', 'edit-skill', skillId]);
  }
}
