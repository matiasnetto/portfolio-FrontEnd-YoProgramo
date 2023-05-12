import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-btn',
  templateUrl: './edit-btn.component.html',
  styleUrls: ['../admin-buttons.css'],
})
export class EditBtnComponent {
  @Input() link: string | undefined;
}
