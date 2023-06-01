import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { subscribeOn } from 'rxjs';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.css']
})
export class DishFormComponent implements OnInit {

  categories$;
  product = { naziv:'', cena:'', kategorija:'', urlSlike:'' };
  id;

  constructor(private router: Router, private route: ActivatedRoute, private categoriesService: CategoriesService, private productService: ProductService) 
  {
    this.categoriesService.getCategories().subscribe(categories => this.categories$ = categories);

    this.id=this.route.snapshot.paramMap.get('id');

    if(this.id) this.productService.get(this.id).valueChanges().pipe(take(1)).subscribe(p=>{
      this.product=p;
      console.log(this.product)
    })

  }

  ngOnInit(): void {
  }

  save(product) {
    if(this.id)
    this.productService.update(this.id, product)
    else
    this.productService.create(product);
    this.router.navigateByUrl('/kreiranjeJelovnika');
  }

  delete() {
    Swal.fire({
      text: 'Da li ste sigurni da želite da obrišete ovaj proizvod?',
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Da',
      denyButtonText: `Odustani`,
      confirmButtonColor: 'rgb(228, 152, 81)',
      denyButtonColor: '#000000',
      width: '30%'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: 'Proizvod obrisan!',
          icon: 'success', showConfirmButton: false, width: '25%', timer: 2000,

        })
        this.productService.delete(this.id),
          this.router.navigate(['/kreiranjeJelovnika'])
      } else if (result.isDenied) {
      }
    })
  }

}
