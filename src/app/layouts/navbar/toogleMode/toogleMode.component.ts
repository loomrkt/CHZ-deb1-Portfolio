import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-toogle-mode',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './toogleMode.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToogleModeComponent { }
