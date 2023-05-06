import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISkillOut } from '../forms/skills-form/skills-form.component';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css'],
})
export class AddSkillComponent {
  constructor(private router: Router) {}

  handleClose() {
    this.router.navigate(['admin']);
  }

  handleCreate(data: ISkillOut) {
    console.log(data);
  }
}
