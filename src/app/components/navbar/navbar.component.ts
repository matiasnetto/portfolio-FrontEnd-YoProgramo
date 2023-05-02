import { Component, OnInit } from '@angular/core';
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

  links = [
    { link: 'about', title: 'About' },
    { link: 'experience', title: 'Experience' },
    { link: 'education', title: 'Education' },
    { link: 'skills', title: 'Habilidades' },
    { link: 'projects', title: 'Projects' },
  ];

  constructor(private service: PortfolioService) {}

  ngOnInit(): void {
    this.service.getAboutMe().subscribe((data) => (this.data = data));
  }

  public toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }
}
