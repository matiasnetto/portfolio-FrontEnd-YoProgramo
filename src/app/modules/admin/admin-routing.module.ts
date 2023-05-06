import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [{ path: 'add-skill', component: AddSkillComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
