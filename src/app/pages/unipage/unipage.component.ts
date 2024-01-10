import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSectionComponent } from './heroSection/heroSection.component';
import { AproposSectionComponent } from './aproposSection/aproposSection.component';
import { SkillsSectionComponent } from './skillsSection/skillsSection.component';
import { TimelineSectionComponent } from './timelineSection/timelineSection.component';
@Component({
  selector: 'app-unipage',
  standalone: true,
  imports: [
    CommonModule,HeroSectionComponent,AproposSectionComponent,SkillsSectionComponent,TimelineSectionComponent,
  ],
  templateUrl: './unipage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnipageComponent { }
