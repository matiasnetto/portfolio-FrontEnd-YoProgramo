import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IProject, IProjectOut } from 'src/app/models/project.model';
import { ISkill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['../forms.css', './projects-form.component.css'],
})
export class ProjectsFormComponent {
  @Output() onSubmit = new EventEmitter<IProjectOut>();
  @Output() onClose = new EventEmitter();
  @Input() title!: string;
  @Input() submitText!: string;
  @Input() defaultData?: IProject;
  showAddSkill = false;

  ngOnInit(): void {
    if (this.defaultData) {
      this.projectData.controls.id.setValue(this.defaultData.id);
      this.projectData.controls.title.setValue(this.defaultData.title);
      this.projectData.controls.image_url.setValue(this.defaultData.image_url);
      this.projectData.controls.end_at.setValue(this.defaultData.end_at);
      this.projectData.controls.description.setValue(
        this.defaultData.description
      );
      this.projectData.controls.project_url.setValue(
        this.defaultData.project_url
      );
      this.projectData.controls.github_url.setValue(
        this.defaultData.github_url
      );
      this.projectData.controls.ord.setValue(this.defaultData.ord);
      this.projectData.controls.technologies.setValue(
        this.defaultData.technologies
      );
    }
  }

  projectData = new FormGroup({
    id: new FormControl<number | null>(null),
    title: new FormControl('', [Validators.required]),
    image_url: new FormControl('', [Validators.required]),
    end_at: new FormControl(new Date(), [Validators.required]),
    description: new FormControl('', [Validators.required]),
    project_url: new FormControl('', [Validators.required]),
    github_url: new FormControl('', [Validators.required]),
    ord: new FormControl(1, [Validators.required]),
    technologies: new FormControl<ISkill[]>([], [Validators.required]),
  });

  openAddSkillModal() {
    this.showAddSkill = true;
  }

  closeAddSkillModal() {
    this.showAddSkill = false;
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    this.onSubmit.emit(this.projectData.value as IProjectOut);
  }

  handleAddSkillSubmit(skills: ISkill[]) {
    this.projectData.controls.technologies.setValue(skills);
    this.closeAddSkillModal();
  }

  closeModal() {
    this.onClose.emit();
  }
}
