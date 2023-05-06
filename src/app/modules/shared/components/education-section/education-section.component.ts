import { Component, OnInit } from '@angular/core';
import { IEducationItem } from 'src/app/models/education.model';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css'],
})
export class EducationSectionComponent implements OnInit {
  education: IEducationItem[] = [];

  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    this.educationService
      .getEducation()
      .subscribe((data) => (this.education = data));
  }
}
