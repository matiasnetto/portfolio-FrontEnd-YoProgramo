import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject, IProjectOut } from 'src/app/models/project.model';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['../modals.css'],
})
export class EditProjectComponent {
  defaultData: IProject | undefined = undefined;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

  handleClose() {
    this.location.back();
  }

  handleUpdate(data: IProjectOut) {
    console.log(data);
  }
}
