import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
  ) {}

  handleClose() {
    this.router.navigate(['admin']);
  }

  handleCreate(data: IEducationItemOut) {
    this.educationService.createNewEducation(data).subscribe(() => {
      this.educationService.reloadEducationData();
      this.handleClose();
    });
    console.log(data);
  }
}
