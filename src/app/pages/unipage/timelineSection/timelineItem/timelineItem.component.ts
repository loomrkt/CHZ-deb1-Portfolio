import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-item',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './timelineItem.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineItemComponent {
  @Input({required:true}) date!: string;
  @Input({required:true}) title!: string;
  @Input({required:true}) description!: string;
 }
