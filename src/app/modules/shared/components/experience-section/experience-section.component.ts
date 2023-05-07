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

  constructor(
    private experienceService: ExperienceService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.experienceService
      .getExperience()
      .subscribe((data) => (this.experience = data));

    this.authService.$isLogedIn.subscribe((data) => (this.editMode = data));
  }

  openNewExperienceModal() {
    this.router.navigate(['admin', 'add-experience']);
  }

  openUpdateModal(experienceId: number) {
    this.router.navigate(['admin', 'edit-experience', experienceId]);
  }

  openDeleteModal(experience: IExperienceItem) {
    const input = confirm(
      `Estas seguro que deseas eliminar tu experiencia en '${experience.enterprise_name}'?`
    );
    console.log('RES: ', input);
  }
}
