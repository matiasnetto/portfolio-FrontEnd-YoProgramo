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
    { link: 'about', title: 'About' },
    { link: 'experience', title: 'Experience' },
    { link: 'education', title: 'Education' },
    { link: 'skills', title: 'Habilidades' },
    { link: 'projects', title: 'Projects' },
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

  public logIn() {
    this.router.navigate(['/auth', 'login']);
  }

  public logOut() {
    this.authService.logOut();
    this.router.navigate(['/']);
  }

  public openContactsModal() {
    this.router.navigate(['admin', 'contacts']);
  }
}
