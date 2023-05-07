import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { EditExperienceComponent } from './components/edit-experience/edit-experience.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
