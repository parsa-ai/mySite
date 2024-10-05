import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AwardsComponent } from './components/awards/awards.component';
import { ContactComponent } from './components/contact/contact.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SkillsComponent } from './components/skills/skills.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
    { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } },
    { path: 'skills', component: SkillsComponent, data: { animation: 'SkillsPage' } },
    { path: 'experience', component: ExperienceComponent, data: { animation: 'ExperiencePage' } },
    { path: 'projects', component: ProjectsComponent, data: { animation: 'ProjectsPage' } },
    { path: 'awards', component: AwardsComponent, data: { animation: 'AwardsPage' } },
    { path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' } },
    { path: '**', component:PagenotfoundComponent },
  ];
  