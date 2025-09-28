import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreviewService {
  private selectedComponent = new BehaviorSubject<any>(null);
  selectedComponent$ = this.selectedComponent.asObservable();

  private previewContent = new BehaviorSubject<string | undefined>('Select a component to preview');
  previewContent$ = this.previewContent.asObservable();

  private componentColorSubject = new BehaviorSubject<string>('#5b21b6');
  componentColor$ = this.componentColorSubject.asObservable();

  setComponent(component: any) {
    this.selectedComponent.next(component);
  }

  setPreview(content: string | undefined) {
    this.previewContent.next(content);
  }

    setColor(color: string) {
    this.componentColorSubject.next(color);
  }

  downloadHTML(html: string, filename = 'component.html') {
    const blob = new Blob([html], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  }
}
