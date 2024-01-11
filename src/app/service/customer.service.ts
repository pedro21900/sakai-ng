import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Customer} from '../domain/customer';
import {lastValueFrom} from "rxjs";

@Injectable()
export class CustomerService {

    constructor(private http: HttpClient) { }

    getCustomersSmall() {
        return lastValueFrom(this.http.get<any>('assets/demo/data/customers-small.json')
        )
            .then(res => res.data as Customer[])
            .then(data => data);
    }

    getCustomersMedium() {
        return this.http.get<any>('assets/demo/data/customers-medium.json')
            .toPromise()
            .then(res => res.data as Customer[])
            .then(data => data);
    }

    getCustomersLarge() {
        return this.http.get<any>('assets/demo/data/customers-large.json')
            .toPromise()
            .then(res => res.data as Customer[])
            .then(data => data);
    }
}
