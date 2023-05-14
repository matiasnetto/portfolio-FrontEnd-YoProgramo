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
  constructor(
    private educationService: EducationService,
    private location: Location
  ) {}

  handleClose() {
    this.location.back();
  }

  handleCreate(data: IEducationItemOut) {
    this.educationService.createNewEducation(data).subscribe(() => {
      this.educationService.reloadEducationData();
      this.handleClose();
    });
    console.log(data);
  }
}
