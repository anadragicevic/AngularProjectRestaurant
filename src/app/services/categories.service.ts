import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private db:AngularFireDatabase) { }

  getCategories(){
    return this.db.list('/categories', ref=>{return ref.orderByChild('name')}).snapshotChanges();  
  }
}
