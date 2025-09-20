import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PreviewService } from '../../services/preivew';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
 styleUrls: ['./home.scss']
})
export class HomeComponent {
  selectedComponent$: Observable<any>;

  constructor(private previewService: PreviewService) {
     this.selectedComponent$ = this.previewService.selectedComponent$;
  }

  selectOption(option: any) {
    console.log('Selected option:', option);
    this.previewService.setPreview(option.html);
  }
}
