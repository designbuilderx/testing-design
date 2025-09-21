import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme-service';
import { SidebarLeftComponent } from '../sidebar-left/sidebar-left.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, SidebarLeftComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  search = '';
  drawerOpen = false;
  primaryColor =
    getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() || '#5b21b6';

  constructor(private themeSvc: ThemeService) {}

  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }

  onSearch() {
    console.log('search:', this.search);
  }

  onColorChange(color: string) {
    this.primaryColor = color;
    this.themeSvc.setPrimaryColor(color);
  }
}
