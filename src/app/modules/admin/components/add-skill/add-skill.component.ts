import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ISkillOut } from 'src/app/models/skill.model';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['../modals.css'],
})
export class AddSkillComponent {
  isLoading = false;

  constructor(
    private skillsService: SkillsService,
    private location: Location
  ) {}

  handleClose() {
    this.location.back();
  }

  handleCreate(data: ISkillOut) {
    this.isLoading = true;
    this.skillsService.createNewSkill(data).subscribe(() => {
      this.skillsService.reloadSkillsData();
      this.isLoading = false;
      this.handleClose();
    });
  }
}
