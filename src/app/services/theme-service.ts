// src/app/services/theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  setPrimaryColor(color: string) {
    document.documentElement.style.setProperty('--primary-color', color);
  }
  getPrimaryColor() {
    return getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
  }
}
