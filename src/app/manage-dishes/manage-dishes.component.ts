import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-manage-dishes',
  templateUrl: './manage-dishes.component.html',
  styleUrls: ['./manage-dishes.component.css']
})
export class ManageDishesComponent implements OnInit {
   
   products$;

  constructor(private productService:ProductService) {

    this.products$=this.productService.getAll();
   }

  ngOnInit(): void {
  }

}
