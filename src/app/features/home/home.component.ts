import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewService } from '../../services/preivew';
import { Observable } from 'rxjs';
import { SafeHtmlPipe } from '../../utils/safe-html.pipes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedComponent$: Observable<any>;
  selectedOptionName: string | null = null; // Track selected variant

  constructor(private previewService: PreviewService) {
    this.selectedComponent$ = this.previewService.selectedComponent$;
  }

  getVariants(component: any) {
    if (!component) return [];

    switch (component.name) {
      case 'Button':
        return [
          { name: 'Primary', html: `<button style="background:#5b21b6;color:white;padding:8px 16px;border:none;border-radius:6px;">Primary</button>` },
          { name: 'Secondary', html: `<button style="background:#e0e0e0;color:#333;padding:8px 16px;border:none;border-radius:6px;">Secondary</button>` },
          { name: 'Outline', html: `<button style="border:1px solid #5b21b6;color:#5b21b6;padding:8px 16px;border-radius:6px;background:none;">Outline</button>` },
          { name: 'Disabled', html: `<button disabled style="background:#ccc;color:#999;padding:8px 16px;border:none;border-radius:6px;">Disabled</button>` }
        ];

      case 'Input Box':
        return [
          { name: 'Default', html: `<input placeholder="Text" style="border:1px solid #5b21b6;padding:6px;border-radius:6px;"/>` },
          { name: 'Focused', html: `<input placeholder="Text" style="border:2px solid #5b21b6;padding:6px;border-radius:6px;outline:none;"/>` },
          { name: 'Disabled', html: `<input placeholder="Disabled" disabled style="border:1px solid #ccc;padding:6px;border-radius:6px;"/>` }
        ];

      case 'Card':
        return [
          { name: 'Default', html: `<div style="border:1px solid #5b21b6;padding:12px;border-radius:8px;width:180px;background:#fff;">Card</div>` },
          { name: 'Shadow', html: `<div style="border:1px solid #5b21b6;padding:12px;border-radius:8px;width:180px;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,0.1)">Card</div>` },
          { name: 'Colored', html: `<div style="border:1px solid #5b21b6;padding:12px;border-radius:8px;width:180px;background:#e0e7ff;">Card</div>` }
        ];

      case 'Tabs':
        return [
          { name: 'Default', html: `<div style="display:flex;gap:4px;"><div style="padding:6px;background:#5b21b6;color:#fff;border-radius:4px;">Tab 1</div><div style="padding:6px;background:#ccc;border-radius:4px;">Tab 2</div></div>` },
          { name: 'Active Highlight', html: `<div style="display:flex;gap:4px;"><div style="padding:6px;background:#5b21b6;color:#fff;border-radius:4px;">Active Tab</div><div style="padding:6px;background:#eee;border-radius:4px;">Tab 2</div></div>` }
        ];

      default:
        return component.children || [];
    }
  }

  selectOption(option: any) {
    this.selectedOptionName = option.name; // mark selected
    this.previewService.setPreview(option.html);
  }
}
