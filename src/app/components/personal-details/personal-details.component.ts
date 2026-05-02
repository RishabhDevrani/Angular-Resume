import { Component, Input } from '@angular/core';
import { PersonalDetails } from '../../resume.models';

@Component({
  selector: 'app-personal-details',
  standalone: true,
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.css'
})
export class PersonalDetailsComponent {
  @Input({ required: true }) details!: PersonalDetails;
}
