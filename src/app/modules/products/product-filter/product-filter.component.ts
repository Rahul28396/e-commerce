import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit{

  price: number = 50;
  sortBy = 'price-asc';
  selectedCategoryId : number = 0;
  categoryService = inject(CategoryService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private categoryId : number = 0;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data) => {
      this.categoryId = Number(data.get('id'));
      this.updateCategory(this.categoryId);
    });

    this.activatedRoute.queryParamMap.subscribe((data) => {
      this.price = data.has('price') ? Number(data.get('price')) : 0;
      this.sortBy = data.has('sort') ? String(data.get('sort')) : 'price-asc';
      this.selectedCategoryId = data.has('categoryId') 
        ? Number(data.get('categoryId')) 
        : 0;
      
      console.log(this.price,this.sortBy, this.selectedCategoryId)
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
        price: this.price,
        sort: this.sortBy,
        categoryId : this.selectedCategoryId.toString()
      },
      queryParamsHandling: 'merge'
    });
  }


}
