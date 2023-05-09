import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  constructor(
    private experienceService: ExperienceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.$defaultData = this.experienceService.getExperienceById(id);
  }

  handleClose() {
    this.router.navigate(['admin']);
  }

  handleUpdate(data: IExperienceItemOut) {
    this.experienceService.updateExperience(data).subscribe(() => {
      this.experienceService.reloadExperienceData();
      this.handleClose();
    });
  }
}
