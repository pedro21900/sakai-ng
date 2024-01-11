import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {lastValueFrom} from "rxjs";

@Injectable()
export class CountryService {

    constructor(private http: HttpClient) { }

    getCountries() {
        return lastValueFrom(this.http.get<any>('assets/demo/data/countries.json'))
            .then(res => res.data as any[])
            .then(data => data);
    }
}
