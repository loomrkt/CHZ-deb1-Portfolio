import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-circular-progress',
  standalone: true,
  imports: [
    CommonModule,NgClass
  ],
  templateUrl: './circularProgress.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircularProgressComponent {
  @Input({required:true}) image!: string;
  @Input({required:true}) name!: string;
  @Input({required:true}) isDark!: boolean|undefined;
}
