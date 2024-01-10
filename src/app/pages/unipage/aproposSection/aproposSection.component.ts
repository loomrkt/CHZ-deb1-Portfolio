import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TexteWithTitleComponent } from './texteWithTitle/texteWithTitle.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { Apropos } from '../../../models/apropos.model';
import { APROPOS } from './mock-apropos';
@Component({
  selector: 'app-apropos-section',
  standalone: true,
  imports: [
    CommonModule,TexteWithTitleComponent,ButtonComponent
  ],
  templateUrl: './aproposSection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AproposSectionComponent {
  apropos: Apropos = APROPOS;
}
