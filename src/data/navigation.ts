import { NavLink } from '../types';

export const navLinks: NavLink[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
    // submenu: [
    //   { title: 'Company Overview', path: '/about' },
    //   { title: 'Our Journey', path: '/about/journey' },
    //   { title: 'Leadership', path: '/about/leadership' },
    // ],
  },
  {
    title: 'Services',
    path: '/services',
    // submenu: [
    //   { title: 'Infrastructure', path: '/services/infrastructure' },
    //   { title: 'Construction', path: '/services/construction' },
    //   { title: 'Engineering', path: '/services/engineering' },
    // ],
  },
  {
    title: 'Projects',
    path: '/projects',
  },
  
  // {
  //   title: 'Media',
  //   path: '/media',
  // },
  {
    title: 'Careers',
    path: '/careers',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];