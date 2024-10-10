import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Accueil',
  },
  {
    displayName: 'Tableau de Bord',
    iconName: 'solar:home-smile-line-duotone',
    route: '/dashboard',
  },

  {
    divider: true,
    navCap: 'Autres',
  },

  {
    displayName: 'Utilisateurs',
    iconName: 'solar:users-group-rounded-broken',
    route: '/users',
  },
  {
    displayName: 'Projets',
    iconName: 'solar:folder-check-broken',
    route: 'apps/tickets',
  },
  {
    displayName: 'Taches',
    iconName: 'solar:bill-check-broken',
    route: '/tasks',
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: '9',
  },
  {
    displayName: 'Calendrier',
    iconName: 'solar:calendar-broken',
    route: '/calendar',
    chip: true,
    chipClass: 'b-1 border-primary text-primary',
    chipContent: 'outlined',
  },
  {
    displayName: 'Parametres',
    iconName: 'solar:settings-outline',
    route: 'https://www.google.com/',
    external: true,
  },
];
