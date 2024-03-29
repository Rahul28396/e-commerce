import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  categories: Category[] = [];

  constructor(private categoryService: CategoryService){}

  ngOnInit(): void {
    this.getCategoryList();
  }

  private getCategoryList(){
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    },
    error=> {
      console.log(error);
    })
  }

}
