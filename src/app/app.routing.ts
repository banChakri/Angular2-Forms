import { Routes, RouterModule } from '@angular/router';
import { personalFormComponent } from './personalform/personalForm.component';
import { professionalFormComponent } from './professionalform/professionalForm.component';

const app_routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/personalForm' },
  { path: 'personalForm', component: personalFormComponent},
  { path: 'professionalForm', component: professionalFormComponent}
];

export const app_routing = RouterModule.forRoot(app_routes);