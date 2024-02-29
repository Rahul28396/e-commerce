import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { CategoryService } from 'src/app/core/services/category.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const categoryServiceSpy: Partial<CategoryService> = {
    getCategories(){
      return of(
        [
          { "id": "1", "title": "Grocery" },
          { "id": "2", "title": "Mobile"}
        ]
      )
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent],
      providers: [{ provide: CategoryService, useValue: categoryServiceSpy }],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { 
    expect(component).toBeTruthy();
  });

  it('should company name', () => {
    const headerElement: HTMLElement = fixture.nativeElement;
    const companyNameElement = headerElement.querySelector('#company-name');
    expect(companyNameElement?.textContent).toBe('Apna Market');
  });

  it('should have search input field', () => {
    const headerElement: HTMLElement = fixture.nativeElement;
    const searchInputElement = headerElement.querySelector('#search');
    expect(searchInputElement?.className).toBe('header__input');
  });

  it('should have category list', () => {
    const headerElement: HTMLElement = fixture.nativeElement;
    const ulElement = headerElement.querySelector('.header__category-list');
    expect(ulElement?.childElementCount).toBe(2);
    expect(ulElement?.children[0].textContent).toBe('Grocery');
    expect(ulElement?.children[1].textContent).toBe('Mobile');
    console.log(ulElement?.childElementCount);
  });
});
