import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSectionComponent } from './heroSection/heroSection.component';
import { AproposSectionComponent } from './aproposSection/aproposSection.component';

@Component({
  selector: 'app-unipage',
  standalone: true,
  imports: [
    CommonModule,HeroSectionComponent,AproposSectionComponent
  ],
  templateUrl: './unipage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnipageComponent { }
