import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { combineLatest, map, Observable } from 'rxjs';
import { SafeHtmlPipe } from '../../utils/safe-html.pipes';
import { PreviewService } from '../../services/preivew';
import * as monaco from 'monaco-editor';
import { Editor } from 'grapesjs';
import { EditorDialogComponent } from '../../shared/editor-dialog/editor-dialog.component';

@Component({
  selector: 'app-sidebar-right',
  standalone: true,
  imports: [CommonModule, FormsModule, AsyncPipe, SafeHtmlPipe, EditorDialogComponent],
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.scss']
})
export class SidebarRightComponent {
  // @ViewChild('monacoContainer', { static: false }) monacoContainer!: ElementRef<HTMLDivElement>;
  // editor!: monaco.editor.IStandaloneCodeEditor;

  previewTitle = 'Preview';
  selectedComponentHtml$: Observable<string>;
  componentColor = '#5b21b6';
  isDialogOpen = false;

  constructor(private previewService: PreviewService) {
    this.selectedComponentHtml$ = combineLatest([
      this.previewService.selectedComponent$,
      this.previewService.componentColor$
    ]).pipe(
      map(([component, color]) => {
        if (!component) return '';
        const htmlString = component.html ?? '';
        return htmlString.replace(/background:\s*#5b21b6/g, `background:${color}`);
      })
    );
  }

  updatePreviewColor(color: string) {
    this.componentColor = color;
    this.previewService.setColor(color);
    // if (this.editor) {
    //   const currentValue = this.editor.getValue();
    //   const updatedValue = currentValue.replace(/background:\s*#5b21b6/g, `background:${color}`);
    //   this.editor.setValue(updatedValue);
    // }
  }

  resetPreview() {
    this.previewService.setComponent(null);
    // if (this.editor) this.editor.setValue('');
  }

  toggleEditor() {
    // if (this.editorVisible && this.monacoContainer && !this.editor) {
    //   setTimeout(() => this.initMonaco(), 0);
    // }
    
  }
  openEditor() {
     this.isDialogOpen = true;
  }
}
