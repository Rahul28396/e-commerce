import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit{

  price = 50;
  sortBy = 'price-asc';
  selectedCategoryId = 0;
  categoryService = inject(CategoryService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((data) => {
      this.price = data.has('price_max') ? Number(data.get('price_max')) : 0;
      this.sortBy = data.has('sort') ? String(data.get('sort')) : 'price-asc';
      this.selectedCategoryId = data.has('categoryId') 
        ? Number(data.get('categoryId')) 
        : 0;
    });
  }

  updateCategory(id: number){
    this.selectedCategoryId = id;
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  applyFilter(){
    this.router.navigate([],{
      relativeTo: this.activatedRoute,
      queryParams: {
        price_min: 1,
        price_max: this.price,
        categoryId: this.selectedCategoryId
      },
      queryParamsHandling: 'merge'
    });
  }

  resetFilter(){
    this.price = 50;
    this.sortBy = 'price-asc';
    this.router.navigate([],{
      relativeTo: this.activatedRoute,
      queryParams: {
        categoryId: this.selectedCategoryId
      },
    });
  }

}
