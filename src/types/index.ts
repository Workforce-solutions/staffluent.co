// Common type definitions
export interface NavLink {
  href: string;
  label: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
