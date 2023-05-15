import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { IAboutMe } from 'src/app/models/about-me.model';
import { AboutMeService } from 'src/app/services/about-me.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  data: IAboutMe | null = null;
  isLoading = true;

  constructor(private service: AboutMeService) {}

  ngOnInit(): void {
    console.log('IS LOADING TO TRUE!!!');
    this.service.getAboutMe().subscribe((data) => {
      if (data) this.isLoading = false;
      this.data = data;
    });
  }
}
