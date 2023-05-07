import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  IExperienceItem,
  IExperienceItemOut,
} from 'src/app/models/experience.model';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['../forms.css'],
})
export class ExperienceFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<IExperienceItemOut>();
  @Output() onClose = new EventEmitter();
  @Input() title!: string;
  @Input() submitText!: string;
  @Input() defaultData?: IExperienceItem;

  experienceData = new FormGroup({
    id: new FormControl<null | number>(null),
    enterprise_name: new FormControl('', [Validators.required]),
    job: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    image_url: new FormControl('', [Validators.required]),
    started_at: new FormControl<Date>(new Date(), [Validators.required]),
    end_at: new FormControl<Date | null>(null),
    ord: new FormControl(1),
  });

  ngOnInit(): void {
    if (this.defaultData) {
      this.experienceData.controls.id.setValue(this.defaultData.id);
      this.experienceData.controls.enterprise_name.setValue(
        this.defaultData.enterprise_name
      );
      this.experienceData.controls.job.setValue(this.defaultData.job);

      this.experienceData.controls.description.setValue(
        this.defaultData.description
      );
      this.experienceData.controls.image_url.setValue(
        this.defaultData.image_url
      );
      this.experienceData.controls.started_at.setValue(
        this.defaultData.started_at
      );
      this.experienceData.controls.end_at.setValue(this.defaultData.end_at);
      this.experienceData.controls.ord.setValue(this.defaultData.ord);
    }
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    this.onSubmit.emit(this.experienceData.value as IExperienceItemOut);
  }

  closeModal() {
    this.onClose.emit();
  }
}
