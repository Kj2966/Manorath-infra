export interface NavLink {
  title: string;
  path: string;
  submenu?: NavLink[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  icon: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
}