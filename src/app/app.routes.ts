import { Routes } from '@angular/router';
import { DesignBuilderComponent } from './features/design-builder/design-builder.component';
import { HomeComponent } from './features/home/home.component';
import { EditorLivePlaygroundComponent } from './features/editor-live-playground/editor-live-playground.component';
import { ComponentSummaryComponent } from './features/summary/summary.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'summary', component: ComponentSummaryComponent },
  { path: 'builder', component: DesignBuilderComponent },
  { path: 'editor', component: EditorLivePlaygroundComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'home' }
];
