import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from 'src/app/models/about-me.model';
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
    console.log('RES: ', input);
  }

  handleDoneClick() {
    this.router.navigate(['admin']);
  }
}
