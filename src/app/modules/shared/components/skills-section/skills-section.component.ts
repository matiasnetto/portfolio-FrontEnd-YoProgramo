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
  isLoading = false;

  constructor(
    private skillsService: SkillsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.editMode = this.authService.isLogedIn;
    this.skillsService.getAllSkills().subscribe((data) => (this.skills = data));
  }

  getNewSkillsModalURL() {
    return '/admin/add-skill';
  }

  getUpdateSkillsModalURL(skillId: number) {
    return `/admin/edit-skill/${skillId}`;
  }

  openDeleteModal(skill: ISkill) {
    const input = confirm(
      `Estas seguro que deseas eliminar '${skill.technology}'?`
    );

    if (input) {
      this.isLoading = true;
      this.skillsService.deleteSkill(skill.id).subscribe(() => {
        this.skillsService.reloadSkillsData();
        this.isLoading = false;
      });
    }
  }
}
