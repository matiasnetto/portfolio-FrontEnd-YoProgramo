import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {
  IEducationItem,
  IEducationItemOut,
} from 'src/app/models/education.model';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['../modals.css'],
})
export class EditEducationComponent {
  $defaultData: Observable<IEducationItem> | undefined = undefined;

  constructor(
    private educationService: EducationService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.$defaultData = this.educationService.getEducationById(id);
  }

  handleClose() {
    this.location.back();
  }

  handleUpdate(data: IEducationItemOut) {
    this.educationService.updateEducation(data).subscribe(() => {
      this.educationService.reloadEducationData();
      this.handleClose();
    });
  }
}
