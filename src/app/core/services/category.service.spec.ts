// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let httpTestingController: HttpTestingController;
  let categoryService: CategoryService;
	let url = 'http://localhost:3000/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    categoryService = TestBed.inject(CategoryService);
  });

  it('should be created', () => {
    expect(categoryService).toBeTruthy();
  });

  it('should call getCategories and return an array of categories', () => {
			
    const mockCategories = [
      { "id": "1", "title": "Grocery" },
      { "id": "2", "title": "Mobiles" },
    ]

    categoryService.getCategories().subscribe((res) => {
      expect(res).toEqual(mockCategories);
    });

    const req = httpTestingController.expectOne({
      method: 'GET',
      url: `${url}categories`,
    });

    req.flush(mockCategories);
  });

});

