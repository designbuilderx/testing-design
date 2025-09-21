import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  search = '';
  primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-color')
    .trim() || '#5b21b6';

  @Output() toggleSidebar = new EventEmitter<void>();

  constructor(private themeSvc: ThemeService) {}

  onSearch() {
    console.log('search:', this.search);
  }

  onColorChange(color: string) {
    this.primaryColor = color;
    this.themeSvc.setPrimaryColor(color);
  }

  onDrawerToggle() {
    this.toggleSidebar.emit();
  }
}
