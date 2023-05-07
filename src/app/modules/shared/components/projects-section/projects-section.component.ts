import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private projectsService: ProjectsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((data) => {
      console.log(data);
      this.projects = data;
    });

    this.authService.$isLogedIn.subscribe((data) => (this.editMode = data));
  }

  openNewProjectModal() {
    this.router.navigate(['admin', 'add-project']);
  }

  openUpdateModal(projectId: number) {
    this.router.navigate(['admin', 'edit-project', projectId]);
  }

  openDeleteModal(project: IProject) {
    const input = confirm(
      `Estas seguro que deseas eliminar '${project.title}'?`
    );
    console.log('RES: ', input);
  }
}
