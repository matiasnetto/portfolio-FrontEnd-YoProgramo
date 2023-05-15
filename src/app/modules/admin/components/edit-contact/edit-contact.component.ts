import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { IContact, IContactOut } from 'src/app/models/about-me.model';
import { AboutMeService } from 'src/app/services/about-me.service';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['../modals.css'],
})
export class EditContactComponent {
  $defaultData: Observable<IContact> | undefined = undefined;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private contactsService: ContactsService,
    private aboutMeService: AboutMeService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.$defaultData = this.contactsService.getContactById(id).pipe(
      tap({
        complete: () => {
          this.isLoading = false;
        },
      })
    );
  }

  handleClose() {
    this.location.back();
  }

  handleUpdate(data: IContactOut) {
    this.isLoading = true;
    this.contactsService.updateEducation(data).subscribe(() => {
      this.contactsService.reloadContactsData();
      this.aboutMeService.reloadAboutMeData();
      this.isLoading = false;
      this.handleClose();
    });
  }
}
