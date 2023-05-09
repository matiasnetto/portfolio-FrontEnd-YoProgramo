import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact, IContactOut } from 'src/app/models/about-me.model';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['../modals.css'],
})
export class EditContactComponent {
  defaultData: IContact | undefined = undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

  handleClose() {
    this.router.navigate(['admin']);
  }

  handleUpdate(data: IContactOut) {
    console.log(data);
  }
}
