import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from '../../../models/hero.model';
import { HERO } from './mock-hero';
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './heroSection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  hero: Hero = HERO;
 }
