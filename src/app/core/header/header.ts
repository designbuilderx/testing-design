// src/app/core/header/header.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  search = '';
  primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() || '#5b21b6';

  constructor(private themeSvc: ThemeService) {}

  onSearch() {
    // TODO: send search text via a SearchService or emit an event
    console.log('search:', this.search);
  }

  onColorChange(color: string) {
    this.primaryColor = color;
    this.themeSvc.setPrimaryColor(color); // updates document root
  }
}
