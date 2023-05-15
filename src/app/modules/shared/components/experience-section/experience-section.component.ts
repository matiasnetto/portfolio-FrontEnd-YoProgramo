import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IExperienceItem } from 'src/app/models/experience.model';
import { AuthService } from 'src/app/services/auth.service';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.css'],
})
export class ExperienceSectionComponent implements OnInit {
  experience: IExperienceItem[] = [];
  editMode: boolean = false;
  isLoading = false;

  constructor(
    private experienceService: ExperienceService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.experienceService
      .getExperience()
      .subscribe((data) => (this.experience = data));

    this.editMode = this.authService.isLogedIn;
  }

  getNewExperienceModalURL() {
    return `/admin/add-experience`;
  }

  getUpdateModalURL(experienceId: number) {
    return `/admin/edit-experience/${experienceId}`;
  }

  openDeleteModal(experience: IExperienceItem) {
    const input = confirm(
      `Estas seguro que deseas eliminar tu experiencia en '${experience.enterprise_name}'?`
    );

    if (input) {
      this.isLoading = true;
      this.experienceService.deleteExperience(experience).subscribe(() => {
        this.experienceService.reloadExperienceData();
        this.isLoading = false;
      });
    }
  }
}
