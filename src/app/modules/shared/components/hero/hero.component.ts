import { Component, OnInit } from '@angular/core';
import { IAboutMe } from 'src/app/models/about-me.model';
import { AboutMeService } from 'src/app/services/about-me.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  data: IAboutMe | null = null;

  constructor(private service: AboutMeService) {}

  ngOnInit(): void {
    this.service.getAboutMe().subscribe((data) => (this.data = data));
  }
}
