import { Component } from '@angular/core';
import { BASE_URL } from 'src/config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  BASE_URL = BASE_URL;
}
