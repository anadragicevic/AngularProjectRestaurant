import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFireDatabase) { }

  create(product){
    return this.db.list('/products').push(product);
  }

  getAll(){
    return this.db.list('/products').snapshotChanges().pipe(
      map(object=>{
        console.log(object);
        return object;
      })
    );
  }

  get(productId):any{
    return this.db.object('/products/'+productId);
  }

  delete(productId){
    return this.db.object('/products/'+ productId).remove();
  }

  update(productId, product){
    return this.db.object('/products/' + productId).update(product);
  }
}
