import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/core/models/category.model';
import { User } from 'src/app/core/models/user.model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { CartService } from 'src/app/core/services/cart.service';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  categories: Category[] = [];
  username: string = '';

  constructor(
    private categoryService: CategoryService,
    private authService: AuthenticationService,
    private router: Router,
    public cartService: CartService,
    
  ){}

  ngOnInit(): void {
    this.getCategoryList();
    this.username = this.authService.loggedInUser['name'];
  }

  private getCategoryList(){
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    },
    error=> {
      console.log(error);
    })
  }

  goToPage(page: string): void{
    this.router.navigateByUrl(`profile/${page}`)
  }

  logout(){
    this.authService.logout();
    this.username = '';
  }

}
