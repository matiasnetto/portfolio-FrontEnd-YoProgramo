import { Component, OnInit } from '@angular/core';
import { IExperienceItem } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.css'],
})
export class ExperienceSectionComponent implements OnInit {
  experience: IExperienceItem[] = [];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experienceService
      .getExperience()
      .subscribe((data) => (this.experience = data));
  }
}
