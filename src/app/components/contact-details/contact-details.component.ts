import { Component, Input } from '@angular/core';
import { ContactDetails } from '../../resume.models';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent {
  @Input({ required: true }) contact!: ContactDetails;
}
