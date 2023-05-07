import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IExperienceItem,
  IExperienceItemOut,
} from 'src/app/models/experience.model';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['../modals.css'],
})
export class EditExperienceComponent implements OnInit {
  defaultData: IExperienceItem | undefined = undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

  handleClose() {
    this.router.navigate(['admin']);
  }

  handleUpdate(data: IExperienceItemOut) {
    console.log(data);
  }
}
