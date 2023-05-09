import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IContactOut } from 'src/app/models/about-me.model';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['../modals.css'],
})
export class AddContactComponent {
  constructor(private router: Router) {}

  handleClose() {
    this.router.navigate(['admin']);
  }

  handleCreate(data: IContactOut) {
    console.log(data);
  }
}
