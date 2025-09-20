import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './core/header/header';
import { SidebarLeftComponent } from './core/sidebar-left/sidebar-left';
import { SidebarRightComponent } from './core/sidebar-right/sidebar-right';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, SidebarLeftComponent, SidebarRightComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  onSelect(component: string) {
    console.log('Selected Component:', component);
  }
}
