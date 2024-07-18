import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { ExperienceComponent } from './experience/experience.component';
import { ServicesComponent } from './services/services.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: 'home' , component: HomeComponent
  },
  {
    path : 'about' , component : AboutComponent
  },
  {
    path : 'blog' , component : BlogComponent
  },
  {
    path : 'contact' , component : ContactComponent
  },
  {
    path : 'work' , component : WorkComponent
  },
  {
    path : 'experience' , component : ExperienceComponent
  },
  {
    path : 'services' , component : ServicesComponent
  },
  {
    path : 'education' , component : EducationComponent
  },
  {
    path : 'skills' , component : SkillsComponent
  },
  {
    path : '' , redirectTo: 'home' , pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
