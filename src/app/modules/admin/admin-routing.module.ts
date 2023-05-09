import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { EditAboutMeComponent } from './components/edit-about-me/edit-about-me.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { EditEducationComponent } from './components/edit-education/edit-education.component';
import { EditExperienceComponent } from './components/edit-experience/edit-experience.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { ShowContactsComponent } from './components/show-contacts/show-contacts.component';
import { UpdateSkillComponent } from './components/update-skill/update-skill.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'add-skill', component: AddSkillComponent },
      { path: 'edit-skill/:id', component: UpdateSkillComponent },
      { path: 'add-experience', component: AddExperienceComponent },
      { path: 'edit-experience/:id', component: EditExperienceComponent },
      { path: 'add-education', component: AddEducationComponent },
      { path: 'edit-education/:id', component: EditEducationComponent },
      { path: 'add-project', component: AddProjectComponent },
      { path: 'edit-project/:id', component: EditProjectComponent },
      { path: 'edit-about-me/:id', component: EditAboutMeComponent },
      { path: 'contacts', component: ShowContactsComponent },
      { path: 'add-contact', component: AddContactComponent },
      { path: 'edit-contact/:id', component: EditContactComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
