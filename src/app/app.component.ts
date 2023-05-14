import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((value) => {
      console.log(value);
      this.jumpTo(value!);
    });
  }

  private jumpTo(fragment: string) {
    const el = document.getElementById(fragment);
    console.log(el);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
