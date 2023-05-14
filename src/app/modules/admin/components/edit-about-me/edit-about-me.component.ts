import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IAboutMe, IAboutMeOut } from 'src/app/models/about-me.model';
import { AboutMeService } from 'src/app/services/about-me.service';

@Component({
  selector: 'app-edit-about-me',
  templateUrl: './edit-about-me.component.html',
  styleUrls: ['../modals.css'],
})
export class EditAboutMeComponent {
  $defaultData: Observable<IAboutMe> | undefined = undefined;

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
    this.aboutMeService.updateAboutMe(data).subscribe(() => {
      this.aboutMeService.reloadAboutMeData();
      this.handleClose();
    });
  }
}
