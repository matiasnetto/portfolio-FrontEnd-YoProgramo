import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  IEducationItem,
  IEducationItemOut,
} from 'src/app/models/education.model';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['../forms.css'],
})
export class EducationFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<IEducationItemOut>();
  @Output() onClose = new EventEmitter();
  @Input() title!: string;
  @Input() submitText!: string;
  @Input() defaultData?: IEducationItem;

  educationData = new FormGroup({
    id: new FormControl<number | null>(null),
    title: new FormControl('', [Validators.required]),
    institute: new FormControl('', [Validators.required]),
    image_url: new FormControl('', [Validators.required]),
    started_at: new FormControl(new Date(), [Validators.required]),
    end_at: new FormControl<Date | null>(new Date(), [Validators.required]),
    ord: new FormControl(1, [Validators.required]),
  });

  ngOnInit(): void {
    if (this.defaultData) {
      this.educationData.controls.id.setValue(this.defaultData.id);
      this.educationData.controls.title.setValue(this.defaultData.title);
      this.educationData.controls.image_url.setValue(
        this.defaultData.image_url
      );
      this.educationData.controls.started_at.setValue(
        this.defaultData.started_at
      );
      this.educationData.controls.end_at.setValue(this.defaultData.end_at);
      this.educationData.controls.ord.setValue(this.defaultData.ord);
    }
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    this.onSubmit.emit(this.educationData.value as IEducationItemOut);
  }

  closeModal() {
    this.onClose.emit();
  }
}
