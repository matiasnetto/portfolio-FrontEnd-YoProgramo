import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IExperienceItemOut } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['../modals.css'],
})
export class AddExperienceComponent {
  constructor(
    private experienceService: ExperienceService,
    private router: Router
  ) {}

  handleClose() {
    this.router.navigate(['admin']);
  }

  handleCreate(data: IExperienceItemOut) {
    this.experienceService.createNewExperience(data).subscribe(() => {
      this.experienceService.reloadExperienceData();
      this.handleClose();
    });
  }
}
