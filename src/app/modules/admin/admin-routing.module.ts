import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { UpdateSkillComponent } from './components/update-skill/update-skill.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'add-skill', component: AddSkillComponent },
      { path: 'edit-skill/:id', component: UpdateSkillComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
