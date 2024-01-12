import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './contactItem.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactItemComponent {
  @Input({required:true}) icon!: string;
  @Input({required:true}) title!: string;
  @Input({required:true}) description!: string;
  @Input({required:true}) Link!: string;
 }
