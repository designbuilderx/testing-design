import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarLeftComponent } from './core/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './core/sidebar-right/sidebar-right.component';
import { HeaderComponent } from './core/header/header.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, SidebarLeftComponent, SidebarRightComponent, NgIf],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  // Tracks sidebar open/close state for mobile/tablet
  sidebarOpen = false;

  // Called from header toggle button
  toggleSidebar() {
    console.log('Toggling sidebar. Current state:', this.sidebarOpen);
    this.sidebarOpen = !this.sidebarOpen;
  }

  // Called when a menu item is clicked or overlay is clicked
  closeSidebar() {
    this.sidebarOpen = false;
  }

  onSelect(component: string) {
    console.log('Selected Component:', component);
    // Close drawer on mobile/tablet after selection
    this.closeSidebar();
  }
}
