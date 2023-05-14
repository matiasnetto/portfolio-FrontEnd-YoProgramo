import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
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
  @Input() $defaultData?: Observable<IEducationItem>;

  educationData = new FormGroup({
    id: new FormControl<number | null>(null),
    title: new FormControl('', [Validators.required]),
    institute: new FormControl('', [Validators.required]),
    image_url: new FormControl('', [Validators.required]),
    started_at: new FormControl(new Date(), [Validators.required]),
    end_at: new FormControl<Date | null>(null),
    ord: new FormControl(1, [Validators.required]),
  });

  ngOnInit(): void {
    if (this.$defaultData) {
      this.$defaultData.subscribe((data) => {
        console.log(data);
        this.educationData.controls.id.setValue(data.id);
        this.educationData.controls.title.setValue(data.title);
        this.educationData.controls.institute.setValue(data.institute);
        this.educationData.controls.image_url.setValue(data.image_url);
        this.educationData.controls.started_at.setValue(data.started_at);
        this.educationData.controls.end_at.setValue(data.end_at);
        this.educationData.controls.ord.setValue(data.ord);
        console.log(this.educationData.value.started_at);
      });
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
