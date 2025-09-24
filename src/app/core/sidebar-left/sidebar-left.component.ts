import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewService } from '../../services/preivew';
import { Router } from '@angular/router';
import { componentsTree } from '../../backendData/category-component-tree';

@Component({
  selector: 'app-sidebar-left',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss'],
})
export class SidebarLeftComponent {
  frameworks = ['Bootstrap', 'Tailwind', 'Material', 'Vanilla', 'Ant Design'];
  selectedFramework = 'Bootstrap';
  componentsTree = componentsTree;

  @Input() drawerOpen = false;
  @Output() closeDrawer = new EventEmitter<void>();

  constructor(private previewService: PreviewService, private route: Router) {}

  toggleCategory(category: any) {
    category.expanded = !category.expanded;
  }

  selectFramework(framework: string) {
    this.selectedFramework = framework;
  }

  selectComponent(component: any, categoryName: string) {
    const compWithName = {
      ...component,
      name: component.name || categoryName,
      children: component.children ? component.children : [component],
    };
    this.previewService.setComponent(compWithName);
    this.previewService.setPreview(compWithName.children[0].html);
    this.route.navigate(['/home']);
    this.closeDrawer.emit(); // close drawer on mobile/tablet after selection
  }
}
