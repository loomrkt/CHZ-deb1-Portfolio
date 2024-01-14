import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CircularProgressComponent } from './circularProgress/circularProgress.component';
import { Skill } from '../../../models/skill.model';
import { SKILLS } from './mock-skill';
@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [
    CommonModule,CircularProgressComponent
  ],
  templateUrl: './skillsSection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsSectionComponent {
  skills: Skill[] = SKILLS;
}
