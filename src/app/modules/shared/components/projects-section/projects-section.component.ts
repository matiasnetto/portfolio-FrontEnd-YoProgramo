import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/project.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css'],
})
export class ProjectsSectionComponent implements OnInit {
  projects: IProject[] = [];
  editMode = false;
  isLoading = false;

  constructor(
    private projectsService: ProjectsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.projectsService.getAllProjects().subscribe((data) => {
      console.log(data);
      this.projects = data;
    });

    this.editMode = this.authService.isLogedIn;
  }

  getNewProjectModalURL() {
    return '/admin/add-project';
  }

  getUpdateModalURL(projectId: number) {
    return `/admin/edit-project/${projectId}`;
  }

  openDeleteModal(project: IProject) {
    const input = confirm(
      `Estas seguro que deseas eliminar '${project.title}'?`
    );

    if (input) {
      this.isLoading = true;
      this.projectsService.deleteProject(project).subscribe(() => {
        this.projectsService.reloadProjectsData();
        this.isLoading = false;
      });
    }
  }
}
