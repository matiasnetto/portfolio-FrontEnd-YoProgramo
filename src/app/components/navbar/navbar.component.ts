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

  constructor(private service: PortfolioService) {}

  ngOnInit(): void {
    this.service.getAboutMe().subscribe((data) => (this.data = data));
  }
}
