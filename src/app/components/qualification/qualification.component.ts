import { Component, Input } from '@angular/core';
import { QualificationDetails } from '../../resume.models';

@Component({
  selector: 'app-qualification',
  standalone: true,
  templateUrl: './qualification.component.html',
  styleUrl: './qualification.component.css'
})
export class QualificationComponent {
  @Input({ required: true }) qualification!: QualificationDetails;
}
