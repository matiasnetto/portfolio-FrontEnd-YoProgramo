import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { IProjectOut } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['../modals.css'],
})
export class AddProjectComponent {
  isLoading = false;
  constructor(
    private location: Location,
    private projectsService: ProjectsService
  ) {}

  handleClose() {
    this.location.back();
  }

  handleCreate(data: IProjectOut) {
    this.isLoading = true;
    this.projectsService.createNewProject(data).subscribe(() => {
      this.projectsService.reloadProjectsData();
      this.isLoading = false;
      this.handleClose();
    });
  }
}
