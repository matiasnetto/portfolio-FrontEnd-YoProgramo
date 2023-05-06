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
@NgModule({
  declarations: [AdminComponent, HomeAdminComponent, SkillsFormComponent, AddSkillComponent, UpdateSkillComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AdminComponent],
})
export class AdminModule {}
