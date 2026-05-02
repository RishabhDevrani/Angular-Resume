import { Component, Input } from '@angular/core';
import { IndustryExposure } from '../../resume.models';

@Component({
  selector: 'app-industry-exposure',
  standalone: true,
  templateUrl: './industry-exposure.component.html',
  styleUrl: './industry-exposure.component.css'
})
export class IndustryExposureComponent {
  @Input({ required: true }) exposure!: IndustryExposure;
}
