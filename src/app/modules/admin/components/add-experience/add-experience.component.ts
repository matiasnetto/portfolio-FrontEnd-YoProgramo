import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { IExperienceItemOut } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['../modals.css'],
})
export class AddExperienceComponent {
  isLoading = false;
  constructor(
    private experienceService: ExperienceService,
    private location: Location
  ) {}

  handleClose() {
    this.location.back();
  }

  handleCreate(data: IExperienceItemOut) {
    this.isLoading = true;
    this.experienceService.createNewExperience(data).subscribe(() => {
      this.experienceService.reloadExperienceData();
      this.isLoading = false;
      this.handleClose();
    });
  }
}
