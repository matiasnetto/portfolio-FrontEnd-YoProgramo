import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
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
  @Input() $defaultData?: Observable<IExperienceItem>;

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
    if (this.$defaultData) {
      this.$defaultData.subscribe((data) => {
        this.experienceData.controls.id.setValue(data.id);
        this.experienceData.controls.enterprise_name.setValue(
          data.enterprise_name
        );
        this.experienceData.controls.job.setValue(data.job);
        this.experienceData.controls.description.setValue(data.description);
        this.experienceData.controls.image_url.setValue(data.image_url);
        this.experienceData.controls.started_at.setValue(data.started_at);
        this.experienceData.controls.end_at.setValue(data.end_at);
        this.experienceData.controls.ord.setValue(data.ord);
      });
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
