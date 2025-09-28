import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, switchMap } from 'rxjs';

export interface Variant {
  name: string;
  class?: string;
  html: string;
}

export interface Subcategory {
  name: string;
  variants: Variant[];
}

export interface Category {
  category: string;
  subcategories: Subcategory[];
}

@Injectable({ providedIn: 'root' })
export class ComponentsLoaderService {
  private basePath = 'assets/ui-library/components/';

  constructor(private http: HttpClient) {}

  loadComponents(): Observable<Category[]> {
    // index.json maps category -> subcategory -> filename
    return this.http.get<{ [category: string]: { [sub: string]: string } }>(`${this.basePath}index.json`).pipe(
      switchMap(indexJson => {
        const categoryObservables: Observable<Category>[] = Object.entries(indexJson).map(([categoryName, subs]) => {
          const subObservables: Observable<Subcategory>[] = Object.entries(subs).map(([subName, fileName]) =>
            this.http.get<Variant[]>(`${this.basePath}${categoryName}/${fileName}`).pipe(
              map(variants => ({
                name: subName,
                variants
              }))
            )
          );

          return forkJoin(subObservables).pipe(
            map(subcategories => ({
              category: categoryName,
              subcategories
            }))
          );
        });

        return forkJoin(categoryObservables);
      })
    );
  }
}
