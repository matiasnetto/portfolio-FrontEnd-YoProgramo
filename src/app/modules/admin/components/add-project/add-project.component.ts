import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProjectOut } from 'src/app/models/project.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['../modals.css'],
})
export class AddProjectComponent {
  constructor(private router: Router) {}

  handleClose() {
    this.router.navigate(['admin']);
  }

  handleCreate(data: IProjectOut) {
    console.log(data);
  }
}
