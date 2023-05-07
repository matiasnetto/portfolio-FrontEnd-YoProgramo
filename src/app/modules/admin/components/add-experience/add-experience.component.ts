import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IExperienceItemOut } from 'src/app/models/experience.model';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['../modals.css'],
})
export class AddExperienceComponent {
  constructor(private router: Router) {}

  handleClose() {
    this.router.navigate(['admin']);
  }

  handleCreate(data: IExperienceItemOut) {
    console.log(data);
  }
}
