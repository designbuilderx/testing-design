import { Component } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SummaryItem {
  title: string;
  desc: string;
  tags: string[];
}

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, FormsModule, AsyncPipe],
  templateUrl: './summary.html',
  styleUrls: ['./summary.scss']
})
export class SummaryComponent {
  summaryData: SummaryItem[] = [];
  currentPage = 1;
  perPage = 8;

  constructor() {
    for (let i = 1; i <= 35; i++) {
      this.summaryData.push({
        title: 'Component ' + i,
        desc: 'Description for component ' + i,
        tags: ['UI', 'Sample', 'Demo']
      });
    }
  }

  get totalPages(): number {
    return Math.ceil(this.summaryData.length / this.perPage);
  }

  paginatedData(): SummaryItem[] {
    const start = (this.currentPage - 1) * this.perPage;
    return this.summaryData.slice(start, start + this.perPage);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }
}
