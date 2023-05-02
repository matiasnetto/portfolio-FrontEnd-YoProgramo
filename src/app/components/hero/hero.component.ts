import { Component, OnInit } from '@angular/core';
import { IAboutMe, PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  data: IAboutMe | null = null;

  constructor(private service: PortfolioService) {}

  ngOnInit(): void {
    this.service.getAboutMe().subscribe((data) => (this.data = data));
  }
}
