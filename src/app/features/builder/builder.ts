import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import grapesjs from 'grapesjs';

@Component({
  selector: 'app-builder',
  standalone: true,
  template: `<div #editorContainer style="height:520px;border:1px solid #ccc;"></div>`
})
export class BuilderComponent implements AfterViewInit {
  @ViewChild('editorContainer', { static: true }) editorContainer!: ElementRef;

  ngAfterViewInit() {
    grapesjs.init({
      container: this.editorContainer.nativeElement,
      fromElement: true,
      height: '520px',
      width: '100%',
      storageManager: { },
      panels: { defaults: [] },
      blockManager: {
        blocks: [
          { id: 'section', label: '<b>Section</b>', content: '<section style="padding:20px;">Section</section>' },
          { id: 'text', label: 'Text', content: '<p>Insert your text here</p>' },
          { id: 'image', label: 'Image', content: '<img src="https://via.placeholder.com/150" />' }
        ]
      }
    });
  }
}
