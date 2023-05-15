import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IAboutMe, IAboutMeOut } from 'src/app/models/about-me.model';
import { AboutMeService } from 'src/app/services/about-me.service';

@Component({
  selector: 'app-edit-about-me',
  templateUrl: './edit-about-me.component.html',
  styleUrls: ['../modals.css'],
})
export class EditAboutMeComponent {
  $defaultData: Observable<IAboutMe> | undefined = undefined;
  isLoading = false;

  constructor(
    private aboutMeService: AboutMeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.$defaultData =
      this.aboutMeService.getAboutMe() as Observable<IAboutMe>;
  }

  handleClose() {
    this.location.back();
  }

  handleUpdate(data: IAboutMeOut) {
    this.isLoading = true;
    this.aboutMeService.updateAboutMe(data).subscribe(() => {
      this.aboutMeService.reloadAboutMeData();
      this.isLoading = false;
      this.handleClose();
    });
  }
}
