import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewService } from '../../services/preivew';
import { Router } from '@angular/router';
import { componentsTree } from '../../backendData/category-component-tree';
import { TreeNode } from '../../models/tree-node';

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
  selectedComponent: TreeNode | null = null;

  @Input() drawerOpen = false;
  @Output() closeDrawer = new EventEmitter<void>();

  constructor(private previewService: PreviewService, private route: Router) {}

  toggleCategory(node: TreeNode) {
    node.expanded = !node.expanded;
  }

  selectFramework(framework: string) {
    this.selectedFramework = framework;
  }

  selectComponent(node: TreeNode, categoryName: string) {
     this.selectedComponent = node;
    const compWithName = {
      ...node,
      name: node.name || categoryName,
    };
    
    this.previewService.setComponent(compWithName);
    // this.previewService.setPreview(compWithName.children[0].html);
    this.route.navigate(['/home']);
    this.closeDrawer.emit(); // close drawer on mobile/tablet after selection
  }
}
