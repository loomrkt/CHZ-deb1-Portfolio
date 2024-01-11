import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSectionComponent } from './heroSection/heroSection.component';
import { AproposSectionComponent } from './aproposSection/aproposSection.component';
import { SkillsSectionComponent } from './skillsSection/skillsSection.component';
import { TimelineSectionComponent } from './timelineSection/timelineSection.component';
import { ProjectsSectionComponent } from './projectsSection/projectsSection.component';
@Component({
  selector: 'app-unipage',
  standalone: true,
  imports: [
    CommonModule,HeroSectionComponent,AproposSectionComponent,SkillsSectionComponent,TimelineSectionComponent,ProjectsSectionComponent
  ],
  templateUrl: './unipage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnipageComponent { }
