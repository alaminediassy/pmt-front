import { Routes } from '@angular/router';

import { AppTicketlistComponent } from './ticketlist/ticketlist.component';
import { AppTaskboardComponent } from './taskboard/taskboard.component';

export const AppsRoutes: Routes = [
  {
    path: 'tickets',
    component: AppTicketlistComponent,
    data: {
      title: 'Projets',
    },
  },
  {
    path: 'taskboard',
    component: AppTaskboardComponent,
    data: {
      title: 'Taches',
    },
  },
];
