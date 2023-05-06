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
  editMode: boolean = false;
  openModal = false;

  constructor(
    private skillsService: SkillsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.$isLogedIn.subscribe((data) => (this.editMode = data));
    this.skillsService.getSkills().subscribe((data) => (this.skills = data));
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
    console.log('RES: ', input);
  }
}
