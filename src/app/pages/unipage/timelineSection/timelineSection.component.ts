import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TimelineItemComponent } from './timelineItem/timelineItem.component';
import { Timeline } from '../../../models/timeline.model';
import { EDUCATION } from './mock-education';
import { EXPERIENCE } from './mock-experience';
@Component({
  selector: 'app-timeline-section',
  standalone: true,
  imports: [
    CommonModule,TimelineItemComponent
  ],
  templateUrl: './timelineSection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineSectionComponent {
  education: Timeline[] = EDUCATION;
  experience: Timeline[] = EXPERIENCE;
}
