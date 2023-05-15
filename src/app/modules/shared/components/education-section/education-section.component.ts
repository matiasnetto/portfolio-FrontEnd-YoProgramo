import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IEducationItem,
  IEducationItemOut,
} from 'src/app/models/education.model';
import { AuthService } from 'src/app/services/auth.service';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css'],
})
export class EducationSectionComponent implements OnInit {
  education: IEducationItem[] = [];
  editMode: boolean = false;
  isLoading = false;

  constructor(
    private educationService: EducationService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.educationService
      .getEducation()
      .subscribe((data) => (this.education = data));
    this.editMode = this.authService.isLogedIn;
  }

  getNewEducationModalURL() {
    return `/admin/add-education`;
  }

  getUpdateModalURL(experienceId: number) {
    return `/admin/edit-education/${experienceId}`;
  }

  openDeleteModal(education: IEducationItem) {
    const input = confirm(
      `Estas seguro que deseas eliminar tu titulo '${education.title}' en '${education.institute}'?`
    );

    if (input) {
      this.isLoading = true;
      this.educationService.deleteEducation(education.id).subscribe(() => {
        this.educationService.reloadEducationData();
        this.isLoading = false;
      });
    }
  }
}
