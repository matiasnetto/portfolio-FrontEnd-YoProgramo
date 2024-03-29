import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import {
  IExperienceItem,
  IExperienceItemOut,
} from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['../modals.css'],
})
export class EditExperienceComponent implements OnInit {
  $defaultData: Observable<IExperienceItem> | undefined = undefined;
  isLoading = true;

  constructor(
    private experienceService: ExperienceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.$defaultData = this.experienceService.getExperienceById(id).pipe(
      tap({
        complete: () => {
          this.isLoading = false;
        },
      })
    );
  }

  handleClose() {
    this.location.back();
  }

  handleUpdate(data: IExperienceItemOut) {
    this.isLoading = true;
    this.experienceService.updateExperience(data).subscribe(() => {
      this.experienceService.reloadExperienceData();
      this.isLoading = false;
      this.handleClose();
    });
  }
}
