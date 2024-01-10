import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component,Input } from '@angular/core';

@Component({
  selector: '[btn-1]',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gradient-to-bl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white  disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 mt-6">
    {{text}}
    <ng-content></ng-content>
  </button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input({required:true}) text!: string;
}
