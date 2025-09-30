import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { PreviewService } from '../../services/preivew';
import { Observable } from 'rxjs';
import { SafeHtmlPipe } from '../../utils/safe-html.pipes';
import { Variant, ComponentsLoaderService } from '../../services/component-loader.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe, NgFor, NgForOf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HomeComponent implements OnInit {
  selectedComponent$: Observable<any>;
  selectedOptionName: string | null = null;

  // HashMap: category -> subcategory -> variants array
  componentsMap: Map<string, Map<string, Variant[]>> = new Map();
  subMap:Map<string, Variant[]> = new Map<string, Variant[]>();

  // Track selected category/subcategory
  selectedCategory: string | null = null;
  selectedSubcategory: string | null = null;

  constructor(
    private previewService: PreviewService,
    private loader: ComponentsLoaderService
  ) {
    this.selectedComponent$ = this.previewService.selectedComponent$;
  }

  ngOnInit(): void {
    this.loader.loadComponents().subscribe({
      next: (data) => {
        this.buildComponentsMap(data);
        console.log(this.subMap);
      },
      error: (err) => console.error(err)
    });
  }

 private buildComponentsMap(data: any[]): void {
  data.forEach(categoryItem => {
    // const subMap = new Map<string, Variant[]>();

    categoryItem.subcategories.forEach((sub: any) => {
      // Flatten the variants object and cast to Variant[]
      const variantsArray: Variant[] = (Object.values(sub.variants).flat() as Variant[]);
      this.subMap.set(sub.name, variantsArray);
    });
    // this.componentsMap.set(categoryItem.category, subMap);
  });
}


  selectCategory(category: string, subcategory: string) {
    this.selectedCategory = category;
    this.selectedSubcategory = subcategory;
  }

  getVariants(selectedComponent: any): Variant[] {
    console.log(selectedComponent)
    // if (!this.selectedCategory || !this.selectedSubcategory) return [];
    return this.subMap?.get(selectedComponent?.name) || [];
  }

  selectOption(option: Variant) {
    this.selectedOptionName = option.name;
    this.previewService.setPreview(option.html);
  }

  download(option: Variant) {
    this.previewService.downloadHTML(option.html, `${option.name}.html`);
  }
}
