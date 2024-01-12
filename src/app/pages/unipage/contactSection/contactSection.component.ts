import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactItemComponent } from './contactItem/contactItem.component';
import { Contact } from '../../../models/contact.model';
import { CONTACTS } from './mock-contact';
@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [
    CommonModule,ContactItemComponent
  ],
  templateUrl: './contactSection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSectionComponent {
  contacts: Contact[] = CONTACTS;
 }
