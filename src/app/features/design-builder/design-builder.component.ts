import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import grapesjs from 'grapesjs';

import presetWebpage from 'grapesjs-preset-webpage';
import blockBasic from 'grapesjs-blocks-basic';

@Component({
  selector: 'app-design-builder',
  standalone: true,
  templateUrl: './design-builder.component.html',
  styleUrls: ['./design-builder.component.scss']
})
export class DesignBuilderComponent implements AfterViewInit {
 @ViewChild('editorContainer', { static: true }) editorContainer!: ElementRef;

  ngAfterViewInit(): void {
    const defaultTemplate = `
      <header style="padding:20px;background:#5b21b6;color:white;text-align:center;">
        <h1>My Dashboard</h1>
      </header>
      <main style="padding:20px;">
        <section style="margin-bottom:20px;">
          <h2>Section 1</h2>
          <p>Welcome to GrapesJS editor!</p>
        </section>
        <section>
          <h2>Section 2</h2>
          <p>Edit this section as you like.</p>
        </section>
      </main>
      <footer style="padding:20px;background:#333;color:white;text-align:center;">
        <p>Footer Content</p>
      </footer>
      <div>Hello </div>
    `;

    grapesjs.init({
      container: this.editorContainer.nativeElement,
      fromElement: false, // We provide our own template
      height: '100%',
      width: '100%',
      storageManager: false, // Disable local storage
      plugins: [presetWebpage, blockBasic],
      pluginsOpts: {
        'gjs-preset-webpage': {},
        'gjs-blocks-basic': {}
      },
      blockManager: { appendTo: undefined },
      styleManager: {
        sectors: [
          {
            name: 'General',
            properties: [
              { name: 'float', property: 'float' },
              { name: 'display', property: 'display' }
            ]
          }
        ]
      },
      components: defaultTemplate
    });
  }
}
