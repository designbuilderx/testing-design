import { Routes } from '@angular/router';
import { BuilderComponent } from './features/builder/builder';
import { DashboardComponent } from './features/dashboard/dashboard';
import { EditorComponent } from './features/editor/editor';
import { HomeComponent } from './features/home/home';
import { SummaryComponent } from './features/summary/summary';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'builder', component: BuilderComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'home' }
];
