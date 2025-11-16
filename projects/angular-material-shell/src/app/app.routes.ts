import { Routes } from '@angular/router';
import { loadRemoteModule } from '@softarc/native-federation-runtime';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => loadRemoteModule('angularMaterialApp', './Component'),
  },
];
