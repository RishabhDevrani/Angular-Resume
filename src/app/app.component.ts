import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { IndustryExposureComponent } from './components/industry-exposure/industry-exposure.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { QualificationComponent } from './components/qualification/qualification.component';
import {
  ContactDetails,
  IndustryExposure,
  PersonalDetails,
  ProfilePicture,
  QualificationDetails
} from './resume.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DatePipe,
    ContactDetailsComponent,
    IndustryExposureComponent,
    PersonalDetailsComponent,
    ProfilePictureComponent,
    QualificationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('resumeIntro', [
      transition(':enter', [
        query('.resume-card, .profile-panel', [
          style({ opacity: 0, transform: 'translateY(18px)' }),
          stagger(90, [
            animate('450ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  currentDateTime = new Date();
  private clockId?: number;

  readonly personalDetails: PersonalDetails = {
    name: 'Rishabh Devrani',
    role: 'MCA Student | Full Stack Developer',
    dateOfBirth: '13 April 2002',
    gender: 'Male',
    nationality: 'Indian',
    summary: 'Motivated computer applications student with a strong interest in Angular, web application development, and practical product building.'
  };

  readonly contactDetails: ContactDetails = {
    address: 'Delhi, India',
    email: 'devranirishabh39@gmail.com',
    phone: '+91 93544 82450'
  };

  readonly qualificationDetails: QualificationDetails = {
    education: [
      {
        label: '10th',
        institution: 'Virendra Public School',
        result: '65%',
        icon: 'school'
      },
      {
        label: '12th',
        institution: 'Virendra Public School',
        result: '70%',
        icon: 'workspace_premium'
      },
      {
        label: 'Graduation',
        institution: 'BCA',
        result: 'Completed',
        icon: 'cast_for_education'
      },
      {
        label: 'Post Graduation',
        institution: 'MCA',
        result: 'Pursuing',
        icon: 'auto_stories'
      }
    ],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/rishabh-dev',
        icon: 'code'
      },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/rishabh-dev',
        icon: 'business_center'
      }
    ]
  };

  readonly industryExposure: IndustryExposure = {
    liveProjects: [
      'Food Coupon System - coupon request, approval, and redemption workflow for campus users.',
      'FeastFlow - food ordering and coupon management experience with role-based views.'
    ]
  };

  readonly profilePicture: ProfilePicture = {
    imageUrl: 'profile.svg',
    alt: 'Profile picture'
  };

  ngOnInit(): void {
    this.clockId = window.setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.clockId) {
      window.clearInterval(this.clockId);
    }
  }

  downloadPdf(): void {
    window.print();
  }
}
