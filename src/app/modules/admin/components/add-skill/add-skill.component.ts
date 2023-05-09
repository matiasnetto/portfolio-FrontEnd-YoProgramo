import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISkillOut } from 'src/app/models/skill.model';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['../modals.css'],
})
export class AddSkillComponent {
  constructor(private skillsService: SkillsService, private router: Router) {}

  handleClose() {
    this.router.navigate(['admin']);
  }

  handleCreate(data: ISkillOut) {
    this.skillsService.createNewSkill(data).subscribe(() => {
      this.skillsService.reloadSkillsData();
      this.handleClose();
    });
  }
}
