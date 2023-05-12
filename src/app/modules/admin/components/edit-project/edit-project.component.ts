import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IProject, IProjectOut } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['../modals.css'],
})
export class EditProjectComponent {
  $defaultData: Observable<IProject> | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectsServcie: ProjectsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.$defaultData = this.projectsServcie.getProjectById(id);
  }

  handleClose() {
    this.location.back();
  }

  handleUpdate(data: IProjectOut) {
    this.projectsServcie.updateProject(data).subscribe(() => {
      this.projectsServcie.reloadProjectsData();
      this.handleClose();
    });
  }
}
