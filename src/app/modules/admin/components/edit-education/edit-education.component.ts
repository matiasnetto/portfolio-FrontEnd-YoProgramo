import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IEducationItem,
  IEducationItemOut,
} from 'src/app/models/education.model';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['../modals.css'],
})
export class EditEducationComponent {
  defaultData: IEducationItem | undefined = undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

  handleClose() {
    this.router.navigate(['admin']);
  }

  handleUpdate(data: IEducationItemOut) {
    console.log(data);
  }
}
