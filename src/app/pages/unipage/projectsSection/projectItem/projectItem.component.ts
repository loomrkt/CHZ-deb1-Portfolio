import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BadgePipe } from './badge.pipe';
@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [
    CommonModule, BadgePipe
  ],
  templateUrl: './projectItem.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectItemComponent {
  @Input({required:true}) title! : string;
  @Input({required:true}) image! : string;
  @Input({required:true}) description! : string;
  @Input({required:true}) technologies! : string[];
}
