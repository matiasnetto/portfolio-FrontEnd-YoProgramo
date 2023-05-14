import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
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
  @Input() $defaultData?: Observable<IAboutMe>;

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
    if (this.$defaultData) {
      console.log('WIth defaut');
      this.$defaultData.subscribe((data) => {
        console.log(data);
        this.aboutMeData.controls.id.setValue(data.id);
        this.aboutMeData.controls.name.setValue(data.name);
        this.aboutMeData.controls.description.setValue(data.description);
        this.aboutMeData.controls.nationality.setValue(data.nationality);
        this.aboutMeData.controls.mail.setValue(data.mail);
        this.aboutMeData.controls.occupation.setValue(data.occupation);
        this.aboutMeData.controls.background_img_header_url.setValue(
          data.background_img_header_url
        );
        this.aboutMeData.controls.profile_img_url.setValue(
          data.profile_img_url
        );
        this.aboutMeData.controls.date_of_birth.setValue(data.date_of_birth);
      });
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
