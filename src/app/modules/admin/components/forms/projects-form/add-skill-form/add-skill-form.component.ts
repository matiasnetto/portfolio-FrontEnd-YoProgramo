import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ISkill } from 'src/app/models/skill.model';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-add-skill-form',
  templateUrl: './add-skill-form.component.html',
  styleUrls: ['./add-skill-form.component.css'],
})
export class AddSkillFormComponent {
  $skills: Observable<ISkill[]>;
  @Input() selectedSkils: ISkill[] = [];
  @Output() onSubmit = new EventEmitter<ISkill[]>();

  constructor(private skillsService: SkillsService) {
    this.$skills = skillsService.getAllSkills();
  }

  isSelected(skill: ISkill): boolean {
    return this.selectedSkils.some((el) => el.id == skill.id);
  }

  handleSkillSelect(skill: ISkill): void {
    if (!this.isSelected(skill)) {
      this.selectedSkils = [...this.selectedSkils, skill];
    } else {
      this.selectedSkils = this.selectedSkils.filter((el) => el.id != skill.id);
    }
  }

  handleDoneClick() {
    this.onSubmit.emit(this.selectedSkils);
  }
}
