import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { combineLatest, map, Observable } from 'rxjs';
import { SafeHtmlPipe } from '../../utils/safe-html.pipes';
import { PreviewService } from '../../services/preivew';

@Component({
  selector: 'app-sidebar-right',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AsyncPipe,
    SafeHtmlPipe,
  ],
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.scss']
})
export class SidebarRightComponent {
  previewTitle = 'Preview';
  selectedComponentHtml$: Observable<string>;
  componentColor = '#ff1234';

  constructor(private previewService: PreviewService) {
    // Combine selectedComponent$ and componentColor$ to get updated HTML
    this.selectedComponentHtml$ = combineLatest([
      this.previewService.selectedComponent$,
      this.previewService.componentColor$
    ]).pipe(
      map(([component, color]) => {
        if (!component) return null;
       const htmlString = component.html ?? '';
        return htmlString.replace(/background:\s*#5b21b6/g, `background:${color}`);
      })
    );
  }

  updatePreviewColor(color: string) {
    this.componentColor = color;
    this.previewService.setColor(color);
  }

  resetPreview() {
    this.previewService.setComponent(null);
  }

  openMonacoEditor() {
    alert('Monaco Editor placeholder');
  }
}
