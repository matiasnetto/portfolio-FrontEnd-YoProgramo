import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ISkill, ISkillOut } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['../forms.css'],
})
export class SkillsFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<ISkillOut>();
  @Output() onClose = new EventEmitter();
  @Input() title!: string;
  @Input() submitText!: string;
  @Input() $defaultData?: Observable<ISkill>;

  ngOnInit(): void {
    if (this.$defaultData) {
      this.$defaultData.subscribe((data) => {
        this.skillData.controls.id.setValue(data.id);
        this.skillData.controls.technology.setValue(data.technology);
        this.skillData.controls.image_url.setValue(data.image_url);
        this.skillData.controls.percent.setValue(data.percent);
        this.skillData.controls.ord.setValue(data.ord);
        console.log(data);
      });
    }
  }

  skillData = new FormGroup({
    id: new FormControl<null | number>(null),
    technology: new FormControl('', {
      validators: [Validators.required],
    }),
    image_url: new FormControl('', {
      validators: [Validators.required],
    }),
    percent: new FormControl(0, {
      validators: [
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
        Validators.min(0),
        Validators.max(100),
      ],
    }),
    ord: new FormControl(1),
  });

  handleSubmit(e: Event) {
    e.preventDefault();
    this.onSubmit.emit(this.skillData.value as ISkillOut);
  }

  closeModal() {
    this.onClose.emit();
  }
}
