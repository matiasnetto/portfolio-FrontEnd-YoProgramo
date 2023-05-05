import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IAboutMe, PortfolioService } from 'src/app/services/portfolio.service';
import { BASE_URL } from 'src/config';

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
    private portfolioService: PortfolioService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.portfolioService.getAboutMe().subscribe((data) => (this.data = data));
    this.authService.$isLogedIn.subscribe((data) => (this.editMode = data));
  }

  public toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

  public logIn() {
    this.authService.logIn('juan', '123');
  }

  public logOut() {
    this.authService.logOut();
  }
}
