import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { EducationSectionComponent } from './components/education-section/education-section.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SectionTitleComponent } from './components/shared/section-title/section-title.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    AboutSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    LoginFormComponent,
    HomeComponent,
    SectionTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
