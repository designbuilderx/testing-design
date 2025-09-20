import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewService } from '../../services/preivew';

@Component({
  selector: 'app-sidebar-left',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss']
})
export class SidebarLeftComponent {
  frameworks = ['Bootstrap', 'Tailwind', 'Material', 'Vanilla'];
  selectedFramework = 'Bootstrap';

  componentsTree = [
    {
      name: 'Form Controls',
      expanded: true,
      children: [
        { name: 'Button', html: `<button style="background:#5b21b6;color:white;padding:8px 16px;border:none;border-radius:6px;">Primary Button</button>` },
        { name: 'Input Box', html: `<input placeholder="Text" style="border:1px solid #5b21b6;padding:6px;border-radius:6px;"/>` }
      ]
    },
    {
      name: 'Layout',
      expanded: false,
      children: [
        { name: 'Card', html: `<div style="border:1px solid #5b21b6;padding:12px;border-radius:8px;width:180px;background:#fff;">Card</div>` },
        { name: 'Dialog', html: `<div style="border:1px solid #5b21b6;padding:12px;border-radius:8px;width:180px;">Dialog<button style="margin-top:6px;background:#5b21b6;color:#fff;border:none;padding:4px 6px;border-radius:4px;">Close</button></div>` }
      ]
    }
  ];

  constructor(private previewService: PreviewService) {}

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
    children: component.children ? component.children : [component] 
  };
  this.previewService.setComponent(compWithName);
  this.previewService.setPreview(compWithName.children[0].html);
}
}
