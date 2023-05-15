import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { IEducationItemOut } from 'src/app/models/education.model';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['../modals.css'],
})
export class AddEducationComponent {
  isLoading = false;
  constructor(
    private educationService: EducationService,
    private location: Location
  ) {}

  handleClose() {
    this.location.back();
  }

  handleCreate(data: IEducationItemOut) {
    this.isLoading = true;
    this.educationService.createNewEducation(data).subscribe(() => {
      this.educationService.reloadEducationData();
      this.isLoading = false;
      this.handleClose();
    });
    console.log(data);
  }
}
