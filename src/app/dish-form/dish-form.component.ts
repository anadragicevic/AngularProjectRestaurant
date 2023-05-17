import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { subscribeOn } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.css']
})
export class DishFormComponent implements OnInit {
  
  categories$;

  constructor(private categoriesService:CategoriesService, private productService:ProductService) { 
    this.categoriesService.getCategories().subscribe(categories=>this.categories$=categories);
  }

  ngOnInit(): void {
  }

  save(product){
     this.productService.create(product);
  }

}
