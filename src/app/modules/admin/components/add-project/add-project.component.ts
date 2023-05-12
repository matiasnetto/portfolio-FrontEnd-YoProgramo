import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { IProjectOut } from 'src/app/models/project.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['../modals.css'],
})
export class AddProjectComponent {
  constructor(private location: Location) {}

  handleClose() {
    this.location.back();
  }

  handleCreate(data: IProjectOut) {
    console.log(data);
  }
}
