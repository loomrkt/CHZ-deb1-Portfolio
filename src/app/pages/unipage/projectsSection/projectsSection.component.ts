import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectItemComponent } from './projectItem/projectItem.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { Project } from '../../../models/project.model';
import { PROJECT } from './mock-projects';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [
    CommonModule,ProjectItemComponent, ButtonComponent
  ],
  templateUrl: './projectsSection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSectionComponent {
  projects: Project[] = PROJECT;
}
