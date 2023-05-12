import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IAboutMe } from 'src/app/models/about-me.model';
import { AboutMeService } from 'src/app/services/about-me.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css'],
})
export class AboutSectionComponent implements OnInit {
  data: IAboutMe | null = null;
  editMode: boolean = false;

  constructor(
    private service: AboutMeService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.getAboutMe().subscribe((data) => (this.data = data));
    this.editMode = this.authService.isLogedIn;
  }

  openUpdateModal(aboutMe: IAboutMe) {
    this.router.navigate(['admin', 'edit-about-me', aboutMe.id]);
  }
}
