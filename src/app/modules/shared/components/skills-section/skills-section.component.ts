import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISkill } from 'src/app/models/skill.model';
import { AuthService } from 'src/app/services/auth.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css'],
})
export class SkillsSectionComponent implements OnInit {
  skills: ISkill[] = [];
  editMode = false;
  openModal = false;

  constructor(
    private skillsService: SkillsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editMode = this.authService.isLogedIn;
    this.skillsService.getAllSkills().subscribe((data) => (this.skills = data));
  }

  openNewSkillsModal() {
    this.router.navigate(['admin', 'add-skill']);
  }

  openUpdateSkillsModal(skillId: number) {
    this.router.navigate(['admin', 'edit-skill', skillId]);
  }

  openDeleteModal(skill: ISkill) {
    const input = confirm(
      `Estas seguro que deseas eliminar '${skill.technology}'?`
    );

    if (input) {
      this.skillsService
        .deleteSkill(skill.id)
        .subscribe(() => this.skillsService.reloadSkillsData());
    }
  }
}
