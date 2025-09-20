import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewService } from '../../services/preivew';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-left',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss'],
})
export class SidebarLeftComponent {
  frameworks = ['Bootstrap', 'Tailwind', 'Material', 'Vanilla'];
  selectedFramework = 'Bootstrap';

  componentsTree = [
    {
      name: 'Form Controls',
      expanded: true,
      children: [
        {
          name: 'Button',
          html: `<button style="background:#5b21b6;color:white;padding:8px 16px;border:none;border-radius:6px;">Primary Button</button>`,
        },
        {
          name: 'Input Box',
          html: `<input placeholder="Enter text" style="border:1px solid #5b21b6;padding:6px;border-radius:6px;"/>`,
        },
        {
          name: 'Textarea',
          html: `<textarea placeholder="Enter description" style="border:1px solid #5b21b6;padding:6px;border-radius:6px;width:180px;height:60px;"></textarea>`,
        },
        { name: 'Checkbox', html: `<label><input type="checkbox"/> Accept Terms</label>` },
        {
          name: 'Radio Button',
          html: `<label><input type="radio" name="radio1"/> Option 1</label>`,
        },
      ],
    },
    {
      name: 'Layout',
      expanded: false,
      children: [
        {
          name: 'Card',
          html: `<div style="border:1px solid #5b21b6;padding:12px;border-radius:8px;width:180px;background:#fff;">Card</div>`,
        },
        {
          name: 'Dialog',
          html: `<div style="border:1px solid #5b21b6;padding:12px;border-radius:8px;width:180px;">Dialog<button style="margin-top:6px;background:#5b21b6;color:#fff;border:none;padding:4px 6px;border-radius:4px;">Close</button></div>`,
        },
        {
          name: 'Accordion',
          html: `<div style="border:1px solid #5b21b6;border-radius:6px;"><div style="padding:6px;background:#fafafa;">Accordion Header</div><div style="padding:6px;">Accordion Content</div></div>`,
        },
        {
          name: 'Grid Layout',
          html: `<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;"><div style="background:#e0e0e0;padding:8px;">Box 1</div><div style="background:#e0e0e0;padding:8px;">Box 2</div></div>`,
        },
      ],
    },
    {
      name: 'Navigation',
      expanded: false,
      children: [
        {
          name: 'Navbar',
          html: `<nav style="background:#5b21b6;color:#fff;padding:8px;border-radius:6px;">Navbar</nav>`,
        },
        {
          name: 'Sidebar',
          html: `<div style="width:120px;background:#eee;padding:8px;border-radius:6px;">Sidebar Item</div>`,
        },
        {
          name: 'Tabs',
          html: `<div style="display:flex;gap:4px;"><div style="padding:6px;background:#5b21b6;color:#fff;border-radius:4px;">Tab 1</div><div style="padding:6px;background:#ccc;border-radius:4px;">Tab 2</div></div>`,
        },
      ],
    },
  ];

  constructor(
    private previewService: PreviewService,
    private route: Router
  ) {}

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
  }
}
