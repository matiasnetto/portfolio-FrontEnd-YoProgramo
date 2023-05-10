import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from 'src/app/models/about-me.model';
import { AboutMeService } from 'src/app/services/about-me.service';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-show-contacts',
  templateUrl: './show-contacts.component.html',
  styleUrls: ['../modals.css', './show-contacts.component.css'],
})
export class ShowContactsComponent implements OnInit {
  contacts: IContact[] | null = null;

  constructor(
    private contactsService: ContactsService,
    private aboutMeService: AboutMeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contactsService
      .getContacts()
      .subscribe((data) => (this.contacts = data));
  }

  openUpdateContact(contact: IContact) {
    this.router.navigate(['admin', 'edit-contact', contact.id]);
  }

  openCreateNewContact() {
    this.router.navigate(['admin', 'add-contact']);
  }

  openDeleteModal(contact: IContact) {
    const input = confirm(
      `Estas seguro que deseas eliminar '${contact.name}'?`
    );

    if (input)
      this.contactsService.deleteContact(contact).subscribe(() => {
        this.contactsService.reloadContactsData();
        this.aboutMeService.reloadAboutMeData();
      });
  }

  handleDoneClick() {
    this.router.navigate(['admin']);
  }
}
