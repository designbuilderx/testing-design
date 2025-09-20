import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
declare const require: any;

@Component({
  selector: 'app-editor',
  standalone: true,
  template: `<div #editor style="height:400px;border:1px solid #ccc;"></div>`
})
export class EditorComponent implements AfterViewInit {
  @ViewChild('editor', { static: true }) editor!: ElementRef;
  monacoInstance: any;

  ngAfterViewInit() {
    // require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs' } });
    // require(['vs/editor/editor.main'], () => {
    //   this.monacoInstance = monaco.editor.create(this.editor.nativeElement, {
    //     value: '<h1>Hello World</h1>',
    //     language: 'html',
    //     theme: 'vs-dark'
    //   });
    // });
  }
}
