import { Component } from '@angular/core';
import { BASE_URL } from 'src/config';

@Component({
  selector: 'about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css'],
})
export class AboutSectionComponent {
  BASE_URL = BASE_URL;
}
