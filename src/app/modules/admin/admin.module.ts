import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { SharedModule } from '../shared/shared.module';
import { SkillsFormComponent } from './components/forms/skills-form/skills-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { UpdateSkillComponent } from './components/update-skill/update-skill.component';
import { ExperienceFormComponent } from './components/forms/experience-form/experience-form.component';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { EditExperienceComponent } from './components/edit-experience/edit-experience.component';
import { EducationFormComponent } from './components/forms/education-form/education-form.component';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { EditEducationComponent } from './components/edit-education/edit-education.component';
import { ProjectsFormComponent } from './components/forms/projects-form/projects-form.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { AddSkillFormComponent } from './components/forms/projects-form/add-skill-form/add-skill-form.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { AboutMeFormComponent } from './components/forms/about-me-form/about-me-form.component';
import { EditAboutMeComponent } from './components/edit-about-me/edit-about-me.component';
@NgModule({
  declarations: [
    AdminComponent,
    HomeAdminComponent,
    SkillsFormComponent,
    AddSkillComponent,
    UpdateSkillComponent,
    ExperienceFormComponent,
    AddExperienceComponent,
    EditExperienceComponent,
    EducationFormComponent,
    AddEducationComponent,
    EditEducationComponent,
    ProjectsFormComponent,
    AddProjectComponent,
    AddSkillFormComponent,
    EditProjectComponent,
    AboutMeFormComponent,
    EditAboutMeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AdminComponent],
})
export class AdminModule {}
