import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Image} from '../domain/image';
import {lastValueFrom} from "rxjs";

@Injectable()
export class PhotoService {

    constructor(private http: HttpClient) { }

    getImages() {
        return lastValueFrom(this.http.get<any>('assets/demo/data/photos.json')
        )
            .then(res => res.data as Image[])
            .then(data => data);
    }
}
