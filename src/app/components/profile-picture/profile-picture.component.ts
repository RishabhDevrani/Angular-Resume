import { Component, Input } from '@angular/core';
import { ProfilePicture } from '../../resume.models';

@Component({
  selector: 'app-profile-picture',
  standalone: true,
  templateUrl: './profile-picture.component.html',
  styleUrl: './profile-picture.component.css'
})
export class ProfilePictureComponent {
  @Input({ required: true }) profile!: ProfilePicture;
}
