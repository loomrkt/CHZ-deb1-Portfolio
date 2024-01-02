import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToogleModeComponent } from './toogleMode/toogleMode.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,ToogleModeComponent
  ],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent { }
