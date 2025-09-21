import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EditorLivePlaygroundComponent } from "../../features/editor-live-playground/editor-live-playground.component";
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import saveAs from 'file-saver';
import JSZip from 'jszip';
import { ButtonThemeViewContent } from '../../utils/btn-file';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

@Component({
  selector: 'app-editor-dialog',
  standalone: true,
  imports: [FormsModule, MonacoEditorModule],
  templateUrl: './editor-dialog.component.html',
  styleUrl: './editor-dialog.component.scss'
})
export class EditorDialogComponent {
@Output() close = new EventEmitter<void>();
@Input() htmlCode = ButtonThemeViewContent.htmlCode;
  @Input() cssCode = ButtonThemeViewContent.cssCode;
  @Input() tsCode = ButtonThemeViewContent.tsCode;

  @Input() filename = 'filename';

  // Monaco editor options
  htmlOptions = { theme: 'vs-dark', language: 'html', automaticLayout: true };
  cssOptions = { theme: 'vs-dark', language: 'css', automaticLayout: true };
  tsOptions = { theme: 'vs-dark', language: 'typescript', automaticLayout: true };

  previewUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.updatePreview();
  }

  updatePreview() {
    const fullHtml = `
      <html>
        <head>
          <style>${this.cssCode}</style>
        </head>
        <body>
          ${this.htmlCode}
        </body>
      </html>
    `;

    const blob = new Blob([fullHtml], { type: 'text/html' });
    this.previewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(blob));
  }

  async downloadUpdatedComponent() {
    const zip = new JSZip();
    zip.file(`${this.filename}.component.ts`, this.tsCode);
    zip.file(`${this.filename}.component.html`, this.htmlCode);
    zip.file(`${this.filename}.component.scss`, this.cssCode);

    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, `${this.filename}.zip`);
  }
}
