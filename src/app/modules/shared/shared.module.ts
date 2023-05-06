import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { EducationSectionComponent } from './components/education-section/education-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { TechnologiesDisplayComponent } from './components/projects-section/technologies-display/technologies-display.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AboutSectionComponent,
    EducationSectionComponent,
    ExperienceSectionComponent,
    HeroComponent,
    HomeComponent,
    NavbarComponent,
    ProjectsSectionComponent,
    SectionTitleComponent,
    SkillsSectionComponent,
    TechnologiesDisplayComponent,
  ],
  imports: [CommonModule],
  exports: [
    AboutSectionComponent,
    EducationSectionComponent,
    ExperienceSectionComponent,
    HeroComponent,
    HomeComponent,
    NavbarComponent,
    ProjectsSectionComponent,
    SectionTitleComponent,
    SkillsSectionComponent,
    TechnologiesDisplayComponent,
  ],
})
export class SharedModule {}
