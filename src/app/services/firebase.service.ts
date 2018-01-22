import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {

  products: Observable<any[]>;

  constructor(private db: AngularFirestore) {  }

  getProducts(){
    this.products = this.db.collection('products').valueChanges();
    return this.products;
  }
  

}

interface Product{
  $sku?:string;
  sellprice?:string;
  unittext?:string;
  description?:string;
}
