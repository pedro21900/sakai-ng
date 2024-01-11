import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Product} from '../domain/product';
import {lastValueFrom} from "rxjs";

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return lastValueFrom(this.http.get<any>('assets/demo/data/products-small.json')
        )
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProducts() {
        return lastValueFrom(this.http.get<any>('assets/demo/data/products.json')
        )
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProductsMixed() {
        return lastValueFrom(this.http.get<any>('assets/demo/data/products-mixed.json'))
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProductsWithOrdersSmall() {
        return lastValueFrom(this.http.get<any>('assets/demo/data/products-orders-small.json'))
            .then(res => res.data as Product[])
            .then(data => data);
    }
}
