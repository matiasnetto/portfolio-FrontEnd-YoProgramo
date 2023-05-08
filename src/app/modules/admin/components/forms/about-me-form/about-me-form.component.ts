import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAboutMe, IAboutMeOut } from 'src/app/models/about-me.model';

@Component({
  selector: 'app-about-me-form',
  templateUrl: './about-me-form.component.html',
  styleUrls: ['../forms.css'],
})
export class AboutMeFormComponent {
  @Output() onSubmit = new EventEmitter<IAboutMeOut>();
  @Output() onClose = new EventEmitter();
  @Input() title!: string;
  @Input() submitText!: string;
  @Input() defaultData?: IAboutMe;

  aboutMeData = new FormGroup({
    id: new FormControl<number | null>(null),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    nationality: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
    occupation: new FormControl('', [Validators.required]),
    background_img_header_url: new FormControl('', [Validators.required]),
    profile_img_url: new FormControl('', [Validators.required]),
    date_of_birth: new FormControl(new Date(), [Validators.required]),
  });

  ngOnInit(): void {
    if (this.defaultData) {
      this.aboutMeData.controls.id.setValue(this.defaultData.id);
      this.aboutMeData.controls.name.setValue(this.defaultData.name);
      this.aboutMeData.controls.description.setValue(
        this.defaultData.description
      );
      this.aboutMeData.controls.nationality.setValue(
        this.defaultData.nationality
      );
      this.aboutMeData.controls.mail.setValue(this.defaultData.mail);
      this.aboutMeData.controls.occupation.setValue(
        this.defaultData.occupation
      );
      this.aboutMeData.controls.background_img_header_url.setValue(
        this.defaultData.background_img_header_url
      );
      this.aboutMeData.controls.profile_img_url.setValue(
        this.defaultData.profile_img_url
      );
      this.aboutMeData.controls.date_of_birth.setValue(
        this.defaultData.date_of_birth
      );
    }
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    this.onSubmit.emit(this.aboutMeData.value as IAboutMeOut);
  }

  closeModal() {
    this.onClose.emit();
  }
}
