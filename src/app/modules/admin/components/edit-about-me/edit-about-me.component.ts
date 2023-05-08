import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAboutMe, IAboutMeOut } from 'src/app/models/about-me.model';

@Component({
  selector: 'app-edit-about-me',
  templateUrl: './edit-about-me.component.html',
  styleUrls: ['../modals.css'],
})
export class EditAboutMeComponent {
  defaultData: IAboutMe | undefined = undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

  handleClose() {
    this.router.navigate(['admin']);
  }

  handleUpdate(data: IAboutMeOut) {
    console.log(data);
  }
}
