import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAboutMe, IContact } from 'src/app/models/about-me.model';
import { AboutMeService } from 'src/app/services/about-me.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  data: IAboutMe | null = null;
  menuOpened: boolean = false;
  editMode: boolean = false;

  links = [
    { id: 'about', title: 'About' },
    { id: 'experience', title: 'Experience' },
    { id: 'education', title: 'Education' },
    { id: 'skills', title: 'Habilidades' },
    { id: 'projects', title: 'Projects' },
  ];

  constructor(
    private aboutMeService: AboutMeService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editMode = this.authService.isLogedIn;
    this.aboutMeService.getAboutMe().subscribe((data) => (this.data = data));
  }

  public toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

  public logOut() {
    this.authService.logOut();
  }

  public getContactsModalURL() {
    return '/admin/contacts';
  }
}
