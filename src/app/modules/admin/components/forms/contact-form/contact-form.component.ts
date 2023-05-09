import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IContact, IContactOut } from 'src/app/models/about-me.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['../forms.css'],
})
export class ContactFormComponent {
  @Output() onSubmit = new EventEmitter<IContactOut>();
  @Output() onClose = new EventEmitter();
  @Input() title!: string;
  @Input() submitText!: string;
  @Input() defaultData?: IContact;

  contactData = new FormGroup({
    id: new FormControl<number | null>(null),
    name: new FormControl('', [Validators.required]),
    url: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    if (this.defaultData) {
      this.contactData.controls.id.setValue(this.defaultData.id);
      this.contactData.controls.name.setValue(this.defaultData.name);
      this.contactData.controls.url.setValue(this.defaultData.url);
      this.contactData.controls.img.setValue(this.defaultData.img);
    }
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    this.onSubmit.emit(this.contactData.value as IContactOut);
  }

  closeModal() {
    this.onClose.emit();
  }
}
