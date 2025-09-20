import { Component, Input } from '@angular/core';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ButtonThemeViewContent } from '../../utils/btn-file';

@Component({
  selector: 'app-editor-live-playground',
  standalone: true,
  imports: [FormsModule, MonacoEditorModule],
  templateUrl: './editor-live-playground.component.html',
  styleUrls: ['./editor-live-playground.component.scss']
})
export class EditorLivePlaygroundComponent {
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
          <script>
            ${this.tsCode}
          </script>
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
