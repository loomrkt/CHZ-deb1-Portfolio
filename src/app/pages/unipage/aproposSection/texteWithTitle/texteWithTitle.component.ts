import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component,Input } from '@angular/core';

@Component({
  selector: 'app-texte-with-title',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p class="text-lg text-gray-600 dark:text-gray-400"><span class="font-bold"> {{title}}: </span> {{text}}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TexteWithTitleComponent {
  @Input({required:true}) title!: string;
  @Input({required:true}) text!: string;
}
