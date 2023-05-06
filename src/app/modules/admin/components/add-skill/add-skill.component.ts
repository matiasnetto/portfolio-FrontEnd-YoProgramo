import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISkillOut } from 'src/app/models/skill.model';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['../modals.css'],
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
