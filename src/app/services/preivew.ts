import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreviewService {
  private selectedComponent = new BehaviorSubject<any>(null);
  selectedComponent$ = this.selectedComponent.asObservable();

  private previewContent = new BehaviorSubject<string | undefined>('Select a component to preview');

  private componentColorSubject = new BehaviorSubject<string>('#5b21b6');
  componentColor$ = this.componentColorSubject.asObservable();

  setComponent(component: any) {
    this.selectedComponent.next(component);
  }

  /**
   * TODO: Use this function for preview purposes.
   * Sets the HTML content for the preview area.
   * @param content HTML content to set in the preview area
   * @returns void
   * @description Sets the HTML content for the preview area. If no content is provided, it defaults to 'Select a component to preview'.
   */
  setPreview(content: string | undefined) {
    this.previewContent.next(content);
  }

  /**
   * Sets the color for the component preview.
   * @param color Hex color string to set for the component preview
   * @returns void
   * @description Sets the color for the component preview. Updates the componentColor$ observable with the new color value.
   */
  setColor(color: string) {
    this.componentColorSubject.next(color);
  }

  /**
   * Downloads the provided HTML content as a file.
   * @param html HTML string to be downloaded as a file
   * @param filename Name of the file to be downloaded (default: 'component.html')
   * @returns void
   * @description Creates a downloadable HTML file from the provided HTML string. The file is named according to the provided filename or defaults to 'component.html'.
   */
  downloadHTML(html: string, filename = 'component.html') {
    const blob = new Blob([html], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  }
}
