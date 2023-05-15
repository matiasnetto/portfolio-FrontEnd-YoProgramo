import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { IContactOut } from 'src/app/models/about-me.model';
import { AboutMeService } from 'src/app/services/about-me.service';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['../modals.css'],
})
export class AddContactComponent {
  isLoading = false;

  constructor(
    private location: Location,
    private contactsService: ContactsService,
    private aboutMeService: AboutMeService
  ) {}

  handleClose() {
    this.location.back();
  }

  handleCreate(data: IContactOut) {
    this.isLoading = true;
    this.contactsService.createNewContact(data).subscribe(() => {
      this.contactsService.reloadContactsData();
      this.aboutMeService.reloadAboutMeData();
      this.isLoading = false;
      this.handleClose();
    });
  }
}
