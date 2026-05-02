export interface PersonalDetails {
  name: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  role: string;
  summary: string;
}

export interface ContactDetails {
  address: string;
  email: string;
  phone: string;
}

export interface QualificationItem {
  label: string;
  institution: string;
  result: string;
  icon: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface QualificationDetails {
  education: QualificationItem[];
  links: SocialLink[];
}

export interface IndustryExposure {
  liveProjects: string[];
}

export interface ProfilePicture {
  imageUrl: string;
  alt: string;
}
