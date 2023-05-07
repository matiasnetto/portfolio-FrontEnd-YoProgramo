import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.css'],
})
export class AddBtnComponent {
  @Input() message = 'Add';
  @Output() click = new EventEmitter<Event>();

  handleClick(e: Event) {
    this.click.emit(e);
  }
}
