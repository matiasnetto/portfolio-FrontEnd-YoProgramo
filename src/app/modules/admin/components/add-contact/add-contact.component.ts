import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IContactOut } from 'src/app/models/about-me.model';
import { AboutMeService } from 'src/app/services/about-me.service';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['../modals.css'],
})
export class AddContactComponent {
  constructor(
    private router: Router,
    private contactsService: ContactsService,
    private aboutMeService: AboutMeService
  ) {}

  handleClose() {
    this.router.navigate(['admin']);
  }

  handleCreate(data: IContactOut) {
    this.contactsService.createNewContact(data).subscribe(() => {
      this.contactsService.reloadContactsData();
      this.aboutMeService.reloadAboutMeData();
      this.handleClose();
    });
  }
}
