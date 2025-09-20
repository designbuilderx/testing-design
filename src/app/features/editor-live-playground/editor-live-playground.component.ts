import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editor-live-playground',
  imports: [],
  templateUrl: './editor-live-playground.component.html',
  styleUrls: ['./editor-live-playground.component.scss']
})
export class EditorLivePlaygroundComponent {
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

