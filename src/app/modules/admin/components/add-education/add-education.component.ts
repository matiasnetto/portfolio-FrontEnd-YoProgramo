import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IEducationItemOut } from 'src/app/models/education.model';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['../modals.css'],
})
export class AddEducationComponent {
  constructor(private router: Router) {}

  handleClose() {
    this.router.navigate(['admin']);
  }

  handleCreate(data: IEducationItemOut) {
    console.log(data);
  }
}
